import React from 'react';
import "./landingPage.css";
 import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const LandingPage = () => {
    return (
        <>
        <div className='landingPage'>
        <Navbar />
        {console.log("LandingPage")}
        <div className="creditCard">
            
            <img className="ccImage" width="400px" src="https://worldscholarshipforum.com/wealth/wp-content/uploads/sites/4/2020/09/How-do-Credit-Card-Companies-Make-Money.jpg"/>
            <div className='ccText'>
            <h3>Try new Premium Credit Card</h3>
            <ul><li>Joining fee 500 + GST</li>
            <li>Earn up to 10,000 additional reward points?</li>
            <li>Buy 1, get 1 movie ticket free at BookMyShow</li>
            <li>One complimentary airport lounge visit per quarter</li>
            </ul>
            </div>
        </div>
        <div className="creditCard" style={{backgroundColor:"#0a393c", color:"white"}}>
            <div className='ccText'>
            <h3>Lowest Interest Rates Ever</h3>
            <ul><li>Lowest rates ever!</li>
            <li>Earn up to 10,000 additional reward points?</li>
            <li>Lowest rates ever!</li>
            <li>Lowest rates ever!</li>
            </ul>
            </div>
            <img className="ccImage" width="400px" src="https://cdnblog.etmoney.com/wp-content/uploads/2020/06/banks-slash-interest-rates.jpg"/>
        </div>
        <div className='rates'>
        
        <h3><b>Products</b> to meet your life goals</h3>
        <div className='products'>
        <div className="box">
            <img  className='boxImage' src="https://media.istockphoto.com/photos/pink-piggybank-stuffed-with-dollar-bills-picture-id184860418?b=1&k=20&m=184860418&s=170667a&w=0&h=JKIy_cotmric0QiDOKR8TLnr0NtuT2c4vJOtg4wRWBg="/>
        <h4>Digital Savings Account</h4>
        </div>
        <div className="box">
            <img  className='boxImage' src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/07/fixed-deposit-1627642644.jpg"/>
        <h4>Express FD</h4>
        </div>
        <div className="box">
            <img  className='boxImage' src="https://www.kindpng.com/picc/m/160-1606721_personal-loan-loan-logo-png-transparent-png.png"/>
        <h4>Personal Loan</h4>
        </div>
        <div className="box">
            <img  className='boxImage' src="https://www.dialabank.com/wp-content/uploads/2020/07/credit-card.jpg"/>
        <h4>Credit Cards</h4>
        </div>
        </div>
        </div>
        
        </div>
        <div className='foot'>
        <Footer/>
        </div>
        </>
    );
    }
export default LandingPage;