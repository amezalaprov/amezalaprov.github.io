import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ShoppingBagIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'gatsby';
import Logo from '../assets/shop-logo.svg';

const Header = () => (
    <Disclosure as="nav">
        {({ open }) => (
            <>
                <div className="max-w-7xl mx-auto py-1 md:py-6 px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center relative h-16">
                        <Link to="/" className="w-full flex justify-center">
                            <div className="flex-shrink-0 flex items-center">
                                <img
                                    className="block h-20 md:h-20 w-auto"
                                    src={Logo}
                                    alt="Workflow"
                                    width="500"
                                    height="280"
                                />
                            </div>
                        </Link>
                    </div>
                </div>

                <Disclosure.Panel className="md:hidden bg-white">
                    <div className="px-8 pt-2 pb-3 space-y-1">
                        <div>Your menu items here</div>
                    </div>
                </Disclosure.Panel>
            </>
        )}
    </Disclosure>
);

export default Header;
