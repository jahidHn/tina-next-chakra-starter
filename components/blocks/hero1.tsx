import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";
import { useTheme } from "../layout";
import { Container } from "../util/container";
import { Section } from "../util/section";
export const Buttons = ({ data, tinaField }) => {
  return (
    <div data-tinafield={tinaField} className="text-center lg:text-left">
      <div
        className="flex-1 flex flex-col gap-6 text-center items-center lg:items-start lg:text-left max-w-xl mx-auto"
        style={{ flexBasis: "16rem" }}
      >
        {data.hero1btnText && (
          <a
            data-tinafield={`${tinaField}.hero1btnText`}
            className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-5 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded"
            href={data.hero1btnLink}
          >
            {data.hero1btnText}
          </a>
        )}
      </div>
    </div>
  );
};
export const Hero1 = ({ data, parentField }) => {
  const theme = useTheme();
  return (
    <>
      <Section className="hero-3">
        <Container size="large">
          <div className="flex flex-wrap items-center -mx-3">
            <div className="w-full lg:w-3/5 px-3">
              <div className="max-w-lg lg:max-w-3xl mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                {data.hero1heading && (
                  <h1
                    data-tinafield={`${parentField}.hero1heading`}
                    className="heading-1"
                  >
                    {data.hero1heading}
                  </h1>
                )}
                {data.hero1content && (
                  <p
                    data-tinafield={`${parentField}.hero1content`}
                    className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn"
                  >
                    <TinaMarkdown content={data.hero1content} />
                  </p>
                )}
              </div>

              {data.hero1buttons && (
                <div className="lg:flex ">
                  {data.hero1buttons.map((block, i) => {
                    return (
                      <Buttons
                        tinaField={`${parentField}.hero1buttons.${i}`}
                        key={i}
                        data={block}
                      />
                    );
                  })}
                </div>
              )}
            </div>
            <div className="w-full lg:w-2/5 px-3 mb-12 lg:mb-0">
              <div className="lg:h-128 flex items-center justify-center lg:justify-end">
                {data.hero1image && (
                  <div
                    data-tinafield={`${parentField}.hero1image`}
                    className="row-start-1 flex justify-center lg:justify-end"
                  >
                    <img
                      className="w-full max-w-xs lg:max-w-md h-auto"
                      alt={data.hero1image.alt}
                      src={data.hero1image.src}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};
const defaultButtons = {
  hero1btnText: "Here's Another Feature",
  hero1btnLink: "/",
};
export const Hero1BlockSchema: TinaTemplate = {
  name: "hero1",
  label: "Hero1",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: {
      hero1heading: "Here's some text above the other text",
      hero1content: "Fasted Frontend for Headless CMS & Wordpress",
      //   text: "Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.",
    },
  },
  fields: [
    {
      type: "string",
      label: "Heading 1",
      name: "hero1heading",
    },
    {
      type: "rich-text",
      label: "Hero Content P",
      name: "hero1content",
    },
    {
      type: "object",
      label: "Add Buttons",
      name: "hero1buttons",
      list: true,
      ui: {
        defaultItem: {
          ...defaultButtons,
        },
      },
      fields: [
        {
          type: "string",
          label: "Button Text",
          name: "hero1btnText",
        },
        {
          type: "string",
          label: "Button Link",
          name: "hero1btnLink",
        },
      ],
    },
    {
      type: "object",
      label: "Image",
      name: "hero1image",
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "image",
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        },
      ],
    },
    //   {
    //     label: "Text",
    //     name: "text",
    //     type: "rich-text",
    //   },
    //   {
    //     label: "Actions",
    //     name: "actions",
    //     type: "object",
    //     list: true,
    //     ui: {
    //       defaultItem: {
    //         label: "Action Label",
    //         type: "button",
    //         icon: true,
    //         link: "/",
    //       },
    //     },
    //     fields: [
    //       {
    //         label: "Label",
    //         name: "label",
    //         type: "string",
    //       },
    //       {
    //         label: "Type",
    //         name: "type",
    //         type: "string",
    //         options: [
    //           { label: "Button", value: "button" },
    //           { label: "Link", value: "link" },
    //         ],
    //       },
    //       {
    //         label: "Icon",
    //         name: "icon",
    //         type: "boolean",
    //       },
    //       {
    //         label: "Link",
    //         name: "link",
    //         type: "string",
    //       },
    //     ],
    //   },
    //   {

    //   {
    //     name: 'svg',
    //     type: 'string',
    //     label: 'Enter SVG code',
    //     description: 'Enter the post description here',
    //   },
    //   {
    //     type: "string",
    //     label: "Color",
    //     name: "color",
    //     options: [
    //       { label: "Default", value: "default" },
    //       { label: "Tint", value: "tint" },
    //       { label: "Primary", value: "primary" },
    //     ],
    //   },
  ],
};
