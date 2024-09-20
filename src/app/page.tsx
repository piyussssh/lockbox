import Image from 'next/image';
import { MdContentCopy, MdEdit, MdOutlineStarRate, MdStarRate, MdVisibility } from 'react-icons/md';

export default function Home() {
    return (
        <main>
            <div className="container py-6 flex flex-col gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center py-4 px-8 rounded cursor-pointer hover:bg-secondary"
                    >
                        <div className="flex gap-3 items-center w-full">
                            <Image src={'/assets/brand/favicon.svg'} width={18} height={18} alt="LockBox" />
                            <p className="">Nexustiq</p>
                        </div>
                        <div className="flex gap-3 items-center  w-full">
                            <MdContentCopy />
                            <p>admin@nexustiq.com</p>
                        </div>
                        <div className="flex gap-3 items-center  w-full">
                            <MdVisibility />
                            <MdContentCopy />
                            <p>@#$@^Y^FG*H</p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <MdEdit />
                            <MdOutlineStarRate />
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
