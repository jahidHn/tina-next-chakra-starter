import { Actions } from "../util/actions";
import { Section } from "../util/section";
import { Container } from "../util/container";
import { Icon } from "../util/icon";
import type { TinaTemplate } from "tinacms";
import { iconSchema } from "../util/icon";

export const Feature = ({ featuresColor, data, tinaField }) => {
  return (
 
      <div
      data-tinafield={tinaField}
        className="flex-1 flex flex-col gap-2 text-center items-center lg:items-start lg:text-left max-w-xl mx-auto"
        style={{ flexBasis: "16rem" }}
      >
        {data.icon && (
          <Icon
            tinaField={`${tinaField}.icon`}
            parentColor={featuresColor}
            data={{ size: "large", ...data.icon }}
          />
        )}
        {data.title && (
          <h3
            data-tinafield={`${tinaField}.title`}
          >
            {data.title}
          </h3>
        )}
        {data.text && (
          <p
            data-tinafield={`${tinaField}.text`}
            className="text-base opacity-80 leading-relaxed"
          >
            {data.text}
          </p>
        )}
        {data.actions && <Actions actions={data.actions} />}
      </div>

  );
};

export const Features2 = ({ data, parentField }) => {
  return (
    <Section color={data.color}>
      <Container size="large">
        <div className="text-center mx-auto max-w-2xl mb-12">
          {data.heading && (
            <h2>
              {data.heading}
            </h2>
          )}
          {data.subHeading && (
            <p className="text-lg opacity-80 leading-relaxed mb-4">
              {data.subHeading}
            </p>
          )}
        </div>
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left`}>
          {data.items &&
            data.items.map(function (block, i) {
              return (
                <Feature
                  tinaField={`${parentField}.items.${i}`}
                  featuresColor={data.color}
                  key={i}
                  data={block}
                />
              );
            })}
        </div>
      </Container>
    </Section>
  );
};

const defaultFeature = {
  title: "Here's Another Feature",
  text: "This is where you might talk about the feature, if this wasn't just filler text.",
  icon: {
    color: "",
    style: "float",
    name: "",
  },
};

export const ftBlockSchema: TinaTemplate = {
  name: "features2",
  label: "Features 2 ",
  ui: {
    previewSrc: "/blocks/features.png",
    defaultItem: {
      heading: "Featured 2 Heading",
      subHeading: "Featured 2 Sub Heading",
      items: [defaultFeature, defaultFeature, defaultFeature],
    },
  },
  fields: [
    {
      type: "string",
      label: "Heading",
      name: "heading",
    },
    {
      type: "string",
      label: "Sub Heading",
      name: "subHeading",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      label: "Feature Items",
      name: "items",
      list: true,
      ui: {
        defaultItem: {
          ...defaultFeature,
        },
      },
      fields: [
        iconSchema,
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Text",
          name: "text",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
      ],
    },
  ],
};
