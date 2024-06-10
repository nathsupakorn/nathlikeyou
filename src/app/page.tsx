'use client';

import { Card, CardHeader, CardBody, Button, Kbd } from '@nextui-org/react';
import { useContext, useEffect, useRef, useState } from 'react';
import { LangContext } from './_contexts/LangProvider';
import enJSON from './_dictionaries/en.json';
import ScrollYItem from './components/motion/ScrollYItem';
import Typewriter from './components/typewriters/TypeWriter';
import { getDictionary } from './dictionaries';
import { CHARACTER_POSITION__EXAMPLE, CHARACTER_POSITION__KEY_BUTTON, HEIROGLYPH__CHARACTER, HEIROGLYPH__KEY_BUTTON, SPECIAL_CHARACTER__VALUE } from './_constant/NathLogogram';

import {
  faCss3,
  faGithub,
  faGolang,
  faHtml5,
  faJava,
  faPython,
  faRProject,
  faReact,
  faSquareJs,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NathFont from "./components/texts/NathFont";
import ENFont from "./components/texts/ENFont";

export default function Home() {
  const { lang } = useContext(LangContext)
  const [dict, setDict] = useState(enJSON)
  const pointerRef = useRef(null);

  const setupPage = async () => {
    const newDict = await getDictionary(lang)
    setDict(newDict)
  }

  useEffect(() => {
    setupPage()
  }, [lang])

  return <>
    <div className='flex justify-center items-center h-[calc(100vh_-_64px)] min-h-[calc(100vh_-_64px)] sm: p-8'>
      <p className='text-6xl flex h-[50vh] text-center justify-center items-center'>
        <Typewriter
          texts={dict.general?.greeting_messages}
          delay={100}
          loop={"start"}
          erase={true}
        />
      </p>
    </div>

    <ScrollYItem reverse={false}>
      <div className='flex justify-around'>
        {[
          { icon: faGithub, label: dict.general.prog_lang.git },
          { icon: faJava, label: dict.general.prog_lang.java },
          { icon: faGolang, label: dict.general.prog_lang.go },
          { icon: faReact, label: dict.general.prog_lang.react },
          { icon: faVuejs, label: dict.general.prog_lang.vue },
        ].map((v) => {
          return <div className="flex flex-col justify-center items-center w-full gap-2">
            <b className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">{v.label}</b>
            <FontAwesomeIcon className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl" icon={v.icon} />
          </div>
        })}
      </div>
      <div className='flex justify-around'>
        {[
          { icon: faPython, label: dict.general.prog_lang.python },
          { icon: faHtml5, label: dict.general.prog_lang.html },
          { icon: faCss3, label: dict.general.prog_lang.css },
          { icon: faSquareJs, label: dict.general.prog_lang.js },
          { icon: faRProject, label: dict.general.prog_lang.r },
        ].map((v) => {
          return <div className="flex flex-col justify-center items-center w-full gap-2">
            <FontAwesomeIcon className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl" icon={v.icon} />
            <b className="text-wrap text-xl md:text-2xl lg:text-3xl xl:text-4xl">{v.label}</b>
          </div>
        })}
      </div>
    </ScrollYItem>

    <div id="persona_stele" className="flex pt-32 pb-32 justify-center">
      <Card className="w-[500px] text-s p-1 m-4 sm:text-m sm:p-2 sm:m-8 md:text-xl md:p-8 md:m-16 lg:text-2xl lg:m-32">
        <CardHeader className="pb-8 pt-2 px-4 flex-col items-start">
          <h2 className="font-bold text-4xl">{dict.general.personal_info}</h2>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-6 gap-4">
            {(Object.keys(dict.data)).map((attr) => (
              <>
                <b className="col-span-2">{dict.personal_info[attr as keyof typeof dict.personal_info]}</b>
                <div className="col-span-4">{dict.data[attr as keyof typeof dict.data]}</div>
              </>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>

    <div id="resume" className="flex pt-32 pb-32 justify-center">
      <Card className="w-[500px] text-s p-1 m-4 sm:text-m sm:p-2 sm:m-8 md:text-xl md:p-8 md:m-16 lg:text-2xl lg:m-32">
        <CardHeader className="pb-8 pt-2 px-4 flex-col items-start">
          <h2 className="font-bold text-4xl">{dict.general.resume}</h2>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-6 gap-4">
            <b className="col-span-2">{dict.general.download}</b>
            <b className="col-span-4">
              <a href="/Supakorn_Kaewjaeng_Resume.pdf" download="Supakorn_Kaewjaeng_Resume">
                <Button color="warning" startContent={
                  <FontAwesomeIcon icon={faArrowDown} />
                }>{dict.general.click_me}</Button>
              </a>
            </b>
            <b className="col-span-2">{dict.general.last_updated.name}</b>
            <div className="col-span-4">
              {dict.general.last_updated.value}
            </div>
          </div>
        </CardBody>
      </Card>
    </div>

    <div id="nath_logogram" className="flex pt-32 pb-32 justify-center">
      <Card className="w-[500px] text-s p-1 m-4 sm:text-m sm:p-2 sm:m-8 md:text-xl md:p-8 md:m-16 lg:text-2xl lg:m-32">
        <CardHeader className="pb-8 pt-2 px-4 flex-col items-start">
          <h2 className="font-bold text-4xl">{dict.navbar.nath_logogram}</h2>
          <span className="text-xl">{dict.general.font_format_description}</span>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-6 gap-4">
            <b className="col-span-2">{dict.general.download}</b>
            <b className="col-span-4">
              <a
                href="/Nath.ttf"
                download="Nath"
              >
                <Button color="warning" startContent={
                  <FontAwesomeIcon icon={faArrowDown} />
                }>{dict.general.click_me}</Button>
              </a>
            </b>
            <b className="col-span-2">{dict.general.last_updated.name}</b>
            <div className="col-span-4">
              {dict.general.last_updated.value}
            </div>
          </div>
        </CardBody>
      </Card>
    </div>

    <div id="how_to_use_nath_logogram" className="flex pt-32 pb-32 justify-center">
      <Card className="w-[1500px] text-s p-1 m-4 sm:text-m sm:p-2 sm:m-8 md:text-xl md:p-8 md:m-16 lg:text-2xl lg:m-32">
        <CardHeader className="pb-8 pt-2 px-4 flex-col items-start">
          <h2 className="font-bold text-4xl">{dict.general.how_to_use_nath_logogram}</h2>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-6 gap-4">
            <b className="col-span-2">{dict.general.hieroglyph}</b>
            <b className="col-span-4">
              <NathFont>{HEIROGLYPH__CHARACTER.full}</NathFont>
            </b>
            <b className="col-span-6">{dict.general.hieroglyph_form.name}</b>
            {Object.entries(dict.general.hieroglyph_form.type).map(([key, val]) => {
              return (<>
                <div className="col-span-1"></div>
                <div className="col-span-1">{val}</div>
                <div className="col-span-4"><NathFont>{HEIROGLYPH__CHARACTER[key as keyof typeof HEIROGLYPH__CHARACTER]}</NathFont></div>
                <div className="col-span-2"></div>
                <div className="col-span-4"><ENFont>{HEIROGLYPH__KEY_BUTTON[key as keyof typeof HEIROGLYPH__KEY_BUTTON].split(" ").map((k) => {
                  return <span className="mr-4"><Kbd>{k}</Kbd></span>
                })}</ENFont></div>
              </>)
            })}
            <b className="col-span-6">{dict.general.specific_character.name}</b>
            {Object.entries(SPECIAL_CHARACTER__VALUE).map(([key, val]) => (<>
              <b className="col-span-1"></b>
              <b className="col-span-1"><ENFont>{key}</ENFont></b>
              <b className="col-span-4"><NathFont>{val}</NathFont></b>
              <b className="col-span-2"></b>
              <b className="col-span-4"><Kbd>{val}</Kbd></b>
            </>))}
            <b className="col-span-6">{dict.general.character_position.name}</b>
            {Object.entries(dict.general.character_position.label).map(([key, val]) => (<>
              <b className="col-span-1"></b>
              <b className="col-span-1">{val}</b>
              <b className="col-span-4"><NathFont>{CHARACTER_POSITION__EXAMPLE[key as keyof typeof CHARACTER_POSITION__EXAMPLE]}</NathFont></b>
              <b className="col-span-2"></b>
              <b className="col-span-4">{CHARACTER_POSITION__KEY_BUTTON[key as keyof typeof CHARACTER_POSITION__KEY_BUTTON].split(" , ").map((k: any) => {
                return <ENFont>{k.split("").map((kb: string) => { return <Kbd className='mx-1'>{kb}</Kbd> })}&nbsp;</ENFont>
              })}</b>
            </>))}
            <b className="col-span-2">{dict.general.spacing_each_half_character}</b>
            <b className="col-span-4">
              <ENFont>
                <span className='text-lg'>
                  <Kbd keys={["option", "shift"]}>-</Kbd> or&nbsp;
                  <Kbd>—</Kbd> or&nbsp;
                  <Kbd>U+2014</Kbd> or&nbsp;
                  <Kbd>{"&mdash;"}</Kbd>
                </span>
              </ENFont>
            </b>

          </div>
        </CardBody>
      </Card>
    </div >
  </>
}
