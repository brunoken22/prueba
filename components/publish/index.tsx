'use client';
import CameraSvg from '@/ui/icons/camera.svg';
import EmojiSvg from '@/ui/icons/emoji.svg';
import GaleriaSvg from '@/ui/icons/galeria.svg';
import EditSvg from '@/ui/icons/edit.svg';
import UserSvg from '@/ui/icons/user.svg';
import CloseSvg from '@/ui/icons/close.svg';
import Link from 'next/link';
import {useState} from 'react';
import {TemplatePhotoProfile} from '@/ui/templatePhotoProfile';
import EmojiPicker, {EmojiStyle} from 'emoji-picker-react';
const itemPublic = [
  {text: 'Trasmisión en vivo', svg: <CameraSvg />},
  {text: 'Fotos y videos', svg: <GaleriaSvg />},
  {text: 'Emoji', svg: <EmojiSvg />},
];
export function Publish() {
  const [openCreatePubli, setOpenCreatePubli] = useState(false);
  const [changePublic, setChangePublic] = useState('');
  const [openEmoji, setOpenEmoji] = useState(false);

  return (
    <div className='flex gap-4 p-4 border-2 border-b-[5px] border-primary rounded-md items-center text-primary'>
      <Link href={'/profile'} className=' hover:opacity-70'>
        <UserSvg />
      </Link>
      <div className='w-full flex flex-col gap-2'>
        <button
          className='flex gap-4 justify-between w-full  border-[1px] border-primary rounded-md p-2 bg-[#F5F5F5] hover:opacity-70'
          onClick={() => {
            document.body.style.overflow = 'hidden';
            setOpenCreatePubli(true);
          }}>
          <p className='font-[700] '>Creá una publicación</p>
          <EditSvg />
        </button>
        <div className='flex gap-4 justify-end max-md:gap-6'>
          {itemPublic.map((item) => (
            <button
              key={item.text}
              className='flex gap-2 items-center hover:opacity-70	'
              onClick={() => {
                document.body.style.overflow = 'hidden';
                setOpenCreatePubli(true);
              }}>
              {item.svg} <span className='max-sm:hidden'>{item.text}</span>
            </button>
          ))}
        </div>
      </div>
      {openCreatePubli ? (
        <div className='absolute inset-0 backdrop-blur	flex justify-center items-center text-white'>
          <div
            className='w-[500px]  bg-secundary rounded-lg
           p-4 flex flex-col gap-[1.5rem] max-sm:w-[90%]'>
            <div className='flex relative justify-center items-center'>
              <h2 className='text-white font-semibold '>Crear publicación</h2>
              <button
                className='absolute right-0 bg-gray-400 rounded-full p-[0.2rem_0.3rem]'
                onClick={() => setOpenCreatePubli(false)}>
                <CloseSvg />
              </button>
            </div>
            <div className='flex justify-between h-full flex-col gap-4'>
              <div className='flex gap-4 flex-col relative'>
                <TemplatePhotoProfile />
                <div className='relative  '>
                  <textarea
                    className={`text-white outline-0  max-h-[250px] min-h-[100px] text-2xl	overflow-auto	placeholder:text-red-100 relative z-10 bg-transparent w-full resize-none	`}
                    onChange={(e: any) => {
                      setChangePublic(e.target.value);
                    }}
                    placeholder='Qué estás pensando Allison?'
                    value={changePublic}></textarea>
                </div>
              </div>
              <div className='flex flex-col gap-6'>
                <div className='flex justify-between rounded-lg border-2 border-[#ddd] p-2'>
                  <h2 className=''>Agregar a tu publicación</h2>
                  <div className='flex gap-4 relative'>
                    <button className=' hover:opacity-70'>
                      <GaleriaSvg />
                    </button>
                    <button
                      className=' hover:opacity-70'
                      onClick={() => setOpenEmoji(!openEmoji)}>
                      <EmojiSvg />
                    </button>
                    {openEmoji ? (
                      <div className='absolute right-0 bottom-full z-10'>
                        <EmojiPicker
                          emojiStyle={EmojiStyle.GOOGLE}
                          height={'350px'}
                          width={'100%'}
                          lazyLoadEmojis={true}
                          onEmojiClick={(code: any) => {
                            setChangePublic(
                              (prev: any) =>
                                prev +
                                (code.isCustom ? code.unified : code.emoji)
                            );
                            setOpenEmoji(false);
                          }}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className=' bg-primary rounded-lg hover:opacity-70'>
                  <button className='text-center p-2 w-full '>Publicar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
