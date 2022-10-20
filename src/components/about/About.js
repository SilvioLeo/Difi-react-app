import React from 'react'
import './About.css'
import AboutCard from './AboutCard'
import {SiHiveBlockchain, SiStrapi, SiFsecure} from 'react-icons/si';
import {VscServerProcess} from 'react-icons/vsc';

const About = () => {
  return (
    <div className='about'>
        <div className="container">
            <h2>A Growing Protocol Ecosystem</h2>
            <p>The DesTra protocol system empowers developers, liquidity providers, and traders to participate in a financial marketplace that is open and accessible to all.</p>

        <div className="card-container">
            <div className="card">
                <AboutCard icon={<SiHiveBlockchain className='icon'/>} heading='Realiable, tamper-proof network' 
                text='Use descentralization, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and available data/APIs to any smart contract.'/>
            </div>
            <div className="card">
                <AboutCard icon={<SiStrapi className='icon'/>}
                heading='Seamless connection to any API'
                text='Build on a flexible framework that can retrive data from any API, connect with existing systems, and integrate with any curret or futere blockchain.'/>
            </div>
            <div className="card">
                <AboutCard icon={<SiFsecure className='icon'/>}
                heading='Proven, ready-made solutions'
                text='Integrate pre-build, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decetralized applications.'/>
            </div>
            <div className="card">
                <AboutCard icon={<VscServerProcess className='icon'/>}
                heading='Secure off-chain computation'
                text='Use decentralized network of DesTra Keeper nodes to automate contracts, mitigating risk of manual intervetions and centralized serves.'/>
            </div>
        </div>
        <a href="/" className="btn">Use DesTra</a>
        </div>
    </div>
  )
}

export default About