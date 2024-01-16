import React from 'react'
import '../../globals.scss';
import About from '@/app/components/about/About';
import Skill from '@/app/components/skill/Skill';
import Work from '@/app/components/work/Work';
import Contact from '@/app/components/contact/Contact';

function page() {
    return (
        <>
            <About />
            <Skill />
            <Work />
            <Contact />
        </>
    )
}

export default page