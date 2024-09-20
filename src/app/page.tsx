'use client';
import EditModal from '@/components/EditModal';
import Image from 'next/image';
import { MdContentCopy, MdEdit, MdOutlineStarRate, MdStarRate, MdVisibility } from 'react-icons/md';

export default function Home() {
    return (
        <main>
            <div className="container py-6 flex flex-col gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div
                        onClick={() => document.getElementById('edit_modal')?.showModal()}
                        key={index}
                        className="flex justify-between items-center py-4 px-5 rounded cursor-pointer hover:bg-secondary"
                    >
                        <div className="flex gap-3 items-center w-full">
                            <Image src={'/assets/brand/favicon.svg'} width={18} height={18} alt="LockBox" />
                            <p className="">Nexustiq</p>
                        </div>
                        <div className="flex gap-1 items-center  w-full">
                            <button className="btn btn-ghost btn-icon" onClick={() => console.log('Hello')}>
                                <MdContentCopy />
                            </button>
                            <p>admin@nexustiq.com</p>
                        </div>
                        <div className="flex gap-1 items-center  w-full">
                            <button className="btn btn-ghost btn-icon" onClick={() => console.log('Hello')}>
                                <MdVisibility />
                            </button>
                            <button className="btn btn-ghost btn-icon" onClick={() => console.log('Hello')}>
                                <MdContentCopy />
                            </button>
                            <p>@#$@^Y^FG*H</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <button className="btn btn-ghost btn-icon" onClick={() => console.log('Hello')}>
                                <MdEdit fontSize={20} />
                            </button>
                            {/* <button className="btn btn-ghost btn-icon" onClick={() => console.log('Hello')}>
                                <MdOutlineStarRate fontSize={20} />
                            </button> */}
                        </div>
                    </div>
                ))}
                <EditModal />
            </div>
        </main>
    );
}
