export const NAV_LINKS = {
    LANDSCAPE: "/docs/landscape",
    DATA_DICTIONARY: "/docs/dataDictionary",
    FAQ: "/docs/faq",
    GET_INVOLVED: "/docs/getInvolved",
    GLOSSARY: "/docs/glossary",
    LEGOS: "/docs/legos",
    BLOG: "/blog/data-builder-hackathon",
    ABOUT: "/about-us",
    FORUM: "https://forum.opendatacommunity.org/",
    HACKATHON: "/hackathon",
    WIKI: "https://github.com/OpenDataforWeb3/Resources/wiki",
    DOCS: "/docs/landscape",
  };
  
  export const SOCIAL_LINKS = {
    discord: "https://discord.gg/NhzkKj7Q",
    github: "https://github.com/opendataforweb3",
    twitter: "https://twitter.com/OpenDataforWeb3",
  };
  
 export const options:any = {
    fpsLimit:120,
      background: {
          color: {
              value: "#713996",
          },
      },
      fullScreen: {
          enable: false,
          zIndex: 0,
        },
    particles: {
      number: {
        value: 130,
        density: {
          enable: true,
          value_area: 600
        }
      },
      color: {
        value: "#fff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#ffffff"
        },
        polygon: {
          nb_sides: 5
        },
  
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 4,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#fff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: ["bubble","grab"]
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance:  170,
          size: 5,
          duration: 2,
          speed: 3,
          opacity: 1,
        
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  };

  export const props:any = {
    createdOn: 'Aug 8, 2023',
    github: 'https://github.com/OpenDataforWeb3/GIS',
    discord: 'https://discord.com/channels/1037443230993743902/1141034397307523154',
    description: `The GIS or Graph based Identification of Sybils project is working to use state of the art deep learning models to identify likely Sybils.
    As of the Fall of 2023, we are working with the Bert4eth model which has achieved outstanding results as a foundation model.  Bert4eth is itself based upon Bert the well known transformer model.`,
    goal: 'Our goal is to keep everything open source and to also provide pipelines and other related software for free to the broader community.  We are always in need of more support as we improve our data pipelines and fixed train and fine tune underlying models.',
    supporter: ' Funding the Commons',
    conclusion:'To get involved feel free to join our Discord or engage with us on our Github.',
  };