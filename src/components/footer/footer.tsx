import { HEADER_LINK } from '../header/header.constant';
import NewsLetterSubscription from './components/newsletter-subscription-form';


function Footer() {
    return(
        <div className={'border-t border-black/[0.17] py-[32px] flex justify-center items-center'}>
            
            <div className={'w-[89%]'}>

                <div className={'flex justify-between pb-[24px]'}>
                    <div>
                        <h6 className={'text-[24px] pb-[40px]'}>HomeFun</h6>
                        <div>
                            <p className={'text-black/[0.40]'}>Wangchu Taba, Babesa, Thimphu</p>
                            <p className={'text-black/[0.40]'}>11001 Bhutan</p>
                        </div>
                    </div>

                    <div>
                        <h6 className={'text-[16px] text-black/[0.40] pb-[40px]'}>Links</h6>
                        <ul>
                            {HEADER_LINK.map((item) => (
                                <li key={item?.id} className={'pb-[16px]'}>
                                    <a className={'cursor-pointer hover:text-primary/50 transition duration-300 ease-in-out'} href={item?.link}>{item?.label}</a>
                                </li>
                            ))}
                        </ul>                    
                    </div>
                    <div>
                        <h6 className={'text-[16px] text-black/[0.40] pb-[40px]'}>Helps</h6>
                        <ul>
                            {['Payment Options', 'Returns', 'Privacy Policies'].map((item, index) => (
                                <li key={index} className={'pb-[16px]'}>
                                    <a className={'cursor-pointer hover:text-primary/50 transition duration-300 ease-in-out'}>{item}</a>
                                </li>
                            ))}
                        </ul>     
                    </div>
                    <div className={'w-[35%]'}>
                        <h6 className={'text-[16px] text-black/[0.40] pb-[40px]'}>Newsletter</h6>   
                        <NewsLetterSubscription />
                    </div>
                </div>

                <div className={'pt-[24px] border-t border-black/[0.17]'}>
                    <p>{new Date().getFullYear()} HomeFun.@ All rights reverved</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;