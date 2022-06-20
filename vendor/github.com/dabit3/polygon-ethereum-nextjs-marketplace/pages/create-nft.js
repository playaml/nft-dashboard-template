import { useState } from 'react'
import { ethers } from 'ethers'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import { useRouter } from 'next/router'
import Web3Modal from 'web3modal'

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

import {
  marketplaceAddress
} from '../config'

import NFTMarketplace from '../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'

export default function CreateItem() {
  const [fileUrl, setFileUrl] = useState(null)
  const [formInput, updateFormInput] = useState({ price: '', name: '', description: ''  })
  const router = useRouter()

  async function onDrop(e) {
    console.log("NFTMarketplace onDrop");
    console.dir(e);
    const fileInput = document.getElementById("file");
    console.dir(fileInput);
    const file = fileInput.files[0];
    try {
      const added = await client.add(
        file,
        {
          progress: (prog) => console.log(`received: ${prog}`)
        }
      )
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      setFileUrl(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
      let fileInputElement = document.getElementById('file');
      let container = new DataTransfer();
      // Here load or generate data
      for (let i=0; i<1; i++)
      {
        const obj = {hello: 'world'};
  	//let data = new Blob([JSON.stringify(obj, null, 2)], {type : 'application/json'});
  	  document.getElementById('dropCanvas').toBlob(async function (blob) { 
            let file = new File([blob], "g"+i+".png",{type:"image/png", lastModified:new Date().getTime()});
            const added = await client.add(
              file,
              {
                progress: (prog) => console.log(`received: ${prog}`)
              }
            );
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            setFileUrl(url)
  	    document.getElementById('preview').style.display = 'none';
  	    document.getElementById('dropCanvas').style.display = 'block';
	    console.log("Added " + url)
          }, 'image/png');
      }
  
      fileInputElement.files = container.files;
      console.log(fileInputElement.files);
    }
  }

  async function onChange(e) {
    const file = e.target.files[0]
    console.log("!!!!! onChange going to call client.add")
    try {
      const added = await client.add(
        file,
        {
          progress: (prog) => console.log(`received: ${prog}`)
        }
      )
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      setFileUrl(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }  
  }
  async function uploadToIPFS() {
    const { name, description, price } = formInput
    console.log("!!!!! uploadToIPFS going to call client.add")
    console.log("fileURL: " + fileUrl);
    if (!name || !description || !price || !fileUrl) return
    /* first, upload to IPFS */
    const data = JSON.stringify({
      name, description, image: fileUrl
    })
    console.log("json: " + data);
    try {
      const added = await client.add(data)
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      /* after file is uploaded to IPFS, return the URL to use it in the transaction */
      return url
    } catch (error) {
      console.log('Error uploading file: ', error)
    }  
  }

  async function listNFTForSale() {
    const { description } = formInput
    const url = await uploadToIPFS()
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()

    /* next, create the item */
    const price = ethers.utils.parseUnits(formInput.price, 'ether')
    let contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)
    let listingPrice = await contract.getListingPrice()
    listingPrice = listingPrice.toString()
    let transaction = await contract.createToken(url, price, { value: listingPrice })
    console.log("Transaction ");
    console.dir(transaction);
    await transaction.wait()
    const docId = description.split("--").pop();
    router.push('/?'+docId)
  }

  return (
    <div className="flex justify-center">
      <div className="w-1/2 flex flex-col pb-12">
        <input id="assetName"
          placeholder="Asset Name"
          className="mt-8 border rounded p-4"
          onChange={e => updateFormInput({ ...formInput, name: e.target.value })}
        />
        <textarea id="assetDescription"
          placeholder="Asset Description"
          className="mt-2 border rounded p-4"
          onChange={e => updateFormInput({ ...formInput, description: e.target.value })}
        />
        <input
          placeholder="Asset Price in Eth"
          className="mt-2 border rounded p-4"
          onChange={e => updateFormInput({ ...formInput, price: e.target.value })}
        />
        <div onDrop={onDrop} 
          id="dropContainer" 
          style={{display: 'none',}} 
          className="mt-2 border rounded p-4">Drop A File Here
        </div>
        <input
          id="file"
          type="file"
          name="Asset"
          className="my-4"
          onChange={onChange}
        />
        {
          fileUrl && (
            <img id="preview" className="rounded mt-4" width="350" src={fileUrl} />
          )
        }
        {
            <canvas  id="dropCanvas" />
        }
        <button onClick={listNFTForSale} style={{backgroundColor: '#E94B3B',}}  className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg">
          Create NFT
        </button>
      </div>
    </div>
  )
}
