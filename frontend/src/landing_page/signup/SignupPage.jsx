import React from 'react';
import Hero from './Hero_Section';
import OpenAccount from '../Open_Account';
import ExploreAccount from './exploreAccount';
import StepsAccount from './StepsToAcc_Open';
import FAQ from './FAQs'
import Acc_Benefits from './AccoutBenefits'
function SignuPage() {
    return (
        <>
         <Hero/>
         <StepsAccount/>
         <Acc_Benefits/>
         <ExploreAccount/>
         <FAQ/>
         <OpenAccount/>
        </>
      );
}

export default SignuPage;
