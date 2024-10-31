// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: v2axwkNNEpdtVkKJd6Azxf
// Component: mV2-zYWBQyPk
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  PlasmicImg as PlasmicImg__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import NavigationBar from "../../NavigationBar"; // plasmic-import: _9w7DeOFimwA/component
import ProjectHeader from "../../ProjectHeader"; // plasmic-import: gzoXJLj0FC6p/component
import ProjectCard from "../../ProjectCard"; // plasmic-import: KciPV1nkxbhX/component
import ContactSection from "../../ContactSection"; // plasmic-import: 6bZYs3NZhKHL/component
import Footer from "../../Footer"; // plasmic-import: RwE34Fh0BJjC/component
import { useScreenVariants as useScreenVariantsudqcE0QtBckk } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: udqcE0QtBCKK/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: v2axwkNNEpdtVkKJd6Azxf/projectcss
import sty from "./PlasmicPremiumSaaSDesign.module.css"; // plasmic-import: mV2-zYWBQyPk/css

createPlasmicElementProxy;

export const PlasmicPremiumSaaSDesign__VariantProps = new Array();

export const PlasmicPremiumSaaSDesign__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPremiumSaaSDesign__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsudqcE0QtBckk()
  });
  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicPremiumSaaSDesign.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicPremiumSaaSDesign.pageMetadata.title}
        />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicPremiumSaaSDesign.pageMetadata.title}
        />

        <meta
          key="description"
          name="description"
          content={PlasmicPremiumSaaSDesign.pageMetadata.description}
        />

        <meta
          key="og:description"
          property="og:description"
          content={PlasmicPremiumSaaSDesign.pageMetadata.description}
        />

        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicPremiumSaaSDesign.pageMetadata.description}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <NavigationBar
            data-plasmic-name={"navigationBar"}
            data-plasmic-override={overrides.navigationBar}
            className={classNames("__wab_instance", sty.navigationBar)}
          />

          <ProjectHeader
            data-plasmic-name={"projectHeader"}
            data-plasmic-override={overrides.projectHeader}
            className={classNames("__wab_instance", sty.projectHeader)}
          />

          <Stack__
            as={"section"}
            hasGap={true}
            className={classNames(projectcss.all, sty.section__lAw2I)}
            id={"Services"}
          >
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img___8TBsO)}
              displayHeight={"700px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"100%"}
              loading={"lazy"}
              src={{
                src: "/plasmic/beginners_guide_website_in_3_minutes/images/wallpaperJpg.jpg",
                fullWidth: 1921,
                fullHeight: 1081,
                aspectRatio: undefined
              }}
            />
          </Stack__>
          <Stack__
            as={"section"}
            hasGap={true}
            className={classNames(projectcss.all, sty.section__zcjcZ)}
            id={"work"}
          >
            <div className={classNames(projectcss.all, sty.freeBox__muihS)}>
              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3__sfu8
                )}
              >
                {"The Client."}
              </h3>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__qmQ9U
                )}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                }
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox___49BO5)}>
              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3__tgCo0
                )}
              >
                {"The Problem."}
              </h3>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ndRm
                )}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                }
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__wFjyh)}>
              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3__vUlIi
                )}
              >
                {"The Solution."}
              </h3>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__wbqve
                )}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                }
              </div>
            </div>
            <Stack__
              as={"section"}
              hasGap={true}
              className={classNames(projectcss.all, sty.section__mhhMn)}
              id={"about"}
            >
              <div className={classNames(projectcss.all, sty.freeBox___3YsKg)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__iJir6)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/beginners_guide_website_in_3_minutes/images/studentGae18422981280Jpg.jpg",
                    fullWidth: 1280,
                    fullHeight: 853,
                    aspectRatio: undefined
                  }}
                />

                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.columns__g2Z9I)}
                >
                  <div
                    className={classNames(projectcss.all, sty.column__vs97W)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img___5JtZ)}
                      displayHeight={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "300px"
                          : "600px"
                      }
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"100%"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/beginners_guide_website_in_3_minutes/images/laptopG9B1Ff63691280Jpg.jpg",
                        fullWidth: 1280,
                        fullHeight: 853,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.column__vmmPq)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__tFywo)}
                      displayHeight={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "300px"
                          : "600px"
                      }
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"100%"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/beginners_guide_website_in_3_minutes/images/entrepreneurG23179Fc2C1280Jpg.jpg",
                        fullWidth: 1280,
                        fullHeight: 853,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                </Stack__>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__j7Q2V)}>
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__g6VB
                  )}
                >
                  {"The Process."}
                </h3>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__jaea8
                  )}
                >
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                  }
                </div>
              </div>
            </Stack__>
            <Stack__
              as={"section"}
              hasGap={true}
              className={classNames(projectcss.all, sty.section__n0KvF)}
              id={"about"}
            >
              <div className={classNames(projectcss.all, sty.freeBox__ujFc)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__hiJxd)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/beginners_guide_website_in_3_minutes/images/laptopG9A7A99E251920Jpg.jpg",
                    fullWidth: 1920,
                    fullHeight: 1280,
                    aspectRatio: undefined
                  }}
                />
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__dkrey)}>
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__qS9YD
                  )}
                >
                  {"The Result."}
                </h3>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ryVr7
                  )}
                >
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                  }
                </div>
              </div>
            </Stack__>
            <Stack__
              as={"section"}
              hasGap={true}
              className={classNames(projectcss.all, sty.section__zYprt)}
              id={"contact"}
            >
              <div className={classNames(projectcss.all, sty.freeBox__iArIr)}>
                <h2
                  data-plasmic-name={"h2"}
                  data-plasmic-override={overrides.h2}
                  className={classNames(
                    projectcss.all,
                    projectcss.h2,
                    projectcss.__wab_text,
                    sty.h2
                  )}
                >
                  {"See my all other \nprojects."}
                </h2>
              </div>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns__qmlRy)}
              >
                <div className={classNames(projectcss.all, sty.column___7PIfH)}>
                  <ProjectCard
                    className={classNames(
                      "__wab_instance",
                      sty.projectCard__tbPGm
                    )}
                    image={{
                      src: "/plasmic/beginners_guide_website_in_3_minutes/images/abstractBackgroundJpg.jpg",
                      fullWidth: 1920,
                      fullHeight: 1171,
                      aspectRatio: undefined
                    }}
                    link={`/web-visual-design`}
                    title={"Web Visual Design"}
                  />
                </div>
                <div className={classNames(projectcss.all, sty.column__qsnXy)}>
                  <ProjectCard
                    className={classNames(
                      "__wab_instance",
                      sty.projectCard__ka0Kt
                    )}
                    link={`/project-relaunch`}
                    title={"Project Relaunch"}
                  />
                </div>
              </Stack__>
            </Stack__>
          </Stack__>
          <ContactSection
            data-plasmic-name={"contactSection"}
            data-plasmic-override={overrides.contactSection}
            className={classNames("__wab_instance", sty.contactSection)}
          />

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "navigationBar",
    "projectHeader",
    "h2",
    "contactSection",
    "footer"
  ],

  navigationBar: ["navigationBar"],
  projectHeader: ["projectHeader"],
  h2: ["h2"],
  contactSection: ["contactSection"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPremiumSaaSDesign__ArgProps,
          internalVariantPropNames: PlasmicPremiumSaaSDesign__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPremiumSaaSDesign__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPremiumSaaSDesign";
  } else {
    func.displayName = `PlasmicPremiumSaaSDesign.${nodeName}`;
  }
  return func;
}

export const PlasmicPremiumSaaSDesign = Object.assign(
  // Top-level PlasmicPremiumSaaSDesign renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navigationBar: makeNodeComponent("navigationBar"),
    projectHeader: makeNodeComponent("projectHeader"),
    h2: makeNodeComponent("h2"),
    contactSection: makeNodeComponent("contactSection"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicPremiumSaaSDesign
    internalVariantProps: PlasmicPremiumSaaSDesign__VariantProps,
    internalArgProps: PlasmicPremiumSaaSDesign__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "Premium SaaS Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPremiumSaaSDesign;
/* prettier-ignore-end */