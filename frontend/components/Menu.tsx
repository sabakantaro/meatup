import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { type } from 'os';

type UtilityMenuProps = {
  items: { key: string; name: string; href: string }[];
  button: React.ReactNode;
};

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

const UtilityMenu: React.FC<UtilityMenuProps> = ({ items, button }) => {
  return (
    <>
      <Menu as='div' className='relative inline-block text-left'>
        {button}
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='py-1'>
              {items.map((item) => (
                <Menu.Item key={item.key}>
                  {({ active }) => (
                    <a
                      href={item.href}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      {item.name}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default UtilityMenu;
