<template>
  <VueformBuilder ref="builder"/>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'VueFormAdmin',
  setup () {
    localStorage.removeItem('vueform-builder');
    localStorage.removeItem('vueform-history');
    const route = useRoute();
    const builder = ref(null);
    const handleSave = async function (builderObject, history) {
      // builderObject - the object that should be saved to db (and loaded)
      // history - the array of previous builderObjects

    };
    onMounted(async () => {
      const load = {
        schema: {
          here: {
            name: 'here',
            type: 'text',
            label: 'Here\n',
            builder: {
              type: 'text'
            }
          },
          h1: {
            name: 'h1',
            type: 'static',
            content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
            builder: {
              type: 'h1'
            }
          },
          h1_1: {
            name: 'h1_1',
            type: 'static',
            content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
            builder: {
              type: 'h1'
            }
          },
          submit: {
            name: 'submit',
            type: 'button',
            buttonLabel: 'Submit',
            submits: true,
            builder: {
              type: 'submit'
            }
          },
          submit_1: {
            name: 'submit_1',
            type: 'button',
            buttonLabel: 'Submit',
            submits: true,
            builder: {
              type: 'submit'
            }
          },
          submit_2: {
            name: 'submit_2',
            type: 'button',
            buttonLabel: 'Submit',
            submits: true,
            builder: {
              type: 'submit'
            }
          },
          primaryButton: {
            name: 'primaryButton',
            type: 'button',
            buttonLabel: 'Button',
            builder: {
              type: 'primaryButton'
            }
          }
        },
        theme: [],
        form: {
          nesting: true
        },
        export: {
          output: 'inline',
          api: 'composition',
          theme: 'none'
        },
        builder: {
          name: 'ROTOP PERTECTOR'
        }
      };

      const history = [
        {
          schema: {
            here: {
              name: 'here',
              type: 'text',
              label: 'Here\n',
              builder: {
                type: 'text'
              }
            }
          },
          theme: [],
          form: {
            nesting: true
          },
          export: {
            output: 'inline',
            api: 'composition',
            theme: 'none'
          },
          builder: {
            name: 'ROTOP PERTECTOR'
          }
        },
        {
          schema: {
            here: {
              name: 'here',
              type: 'text',
              label: 'Here\n',
              builder: {
                type: 'text'
              }
            },
            h1: {
              name: 'h1',
              type: 'static',
              content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
              builder: {
                type: 'h1'
              }
            }
          },
          theme: [],
          form: {
            nesting: true
          },
          export: {
            output: 'inline',
            api: 'composition',
            theme: 'none'
          },
          builder: {
            name: 'ROTOP PERTECTOR'
          }
        },
        {
          schema: {
            here: {
              name: 'here',
              type: 'text',
              label: 'Here\n',
              builder: {
                type: 'text'
              }
            }
          },
          theme: [],
          form: {
            nesting: true
          },
          export: {
            output: 'inline',
            api: 'composition',
            theme: 'none'
          },
          builder: {
            name: 'ROTOP PERTECTOR'
          }
        },
        {
          schema: {
            here: {
              name: 'here',
              type: 'text',
              label: 'Here\n',
              builder: {
                type: 'text'
              }
            },
            h1: {
              name: 'h1',
              type: 'static',
              content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
              builder: {
                type: 'h1'
              }
            }
          },
          theme: [],
          form: {
            nesting: true
          },
          export: {
            output: 'inline',
            api: 'composition',
            theme: 'none'
          },
          builder: {
            name: 'ROTOP PERTECTOR'
          }
        },
        {
          schema: {
            here: {
              name: 'here',
              type: 'text',
              label: 'Here\n',
              builder: {
                type: 'text'
              }
            },
            h1: {
              name: 'h1',
              type: 'static',
              content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
              builder: {
                type: 'h1'
              }
            },
            h1_1: {
              name: 'h1_1',
              type: 'static',
              content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
              builder: {
                type: 'h1'
              }
            }
          },
          theme: [],
          form: {
            nesting: true
          },
          export: {
            output: 'inline',
            api: 'composition',
            theme: 'none'
          },
          builder: {
            name: 'ROTOP PERTECTOR'
          }
        },
        {
          schema: {
            here: {
              name: 'here',
              type: 'text',
              label: 'Here\n',
              builder: {
                type: 'text'
              }
            },
            h1: {
              name: 'h1',
              type: 'static',
              content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
              builder: {
                type: 'h1'
              }
            },
            h1_1: {
              name: 'h1_1',
              type: 'static',
              content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
              builder: {
                type: 'h1'
              }
            },
            submit: {
              name: 'submit',
              type: 'button',
              buttonLabel: 'Submit',
              submits: true,
              builder: {
                type: 'submit'
              }
            }
          },
          theme: [],
          form: {
            nesting: true
          },
          export: {
            output: 'inline',
            api: 'composition',
            theme: 'none'
          },
          builder: {
            name: 'ROTOP PERTECTOR'
          }
        },
        {
          schema: {
            here: {
              name: 'here',
              type: 'text',
              label: 'Here\n',
              builder: {
                type: 'text'
              }
            },
            h1: {
              name: 'h1',
              type: 'static',
              content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
              builder: {
                type: 'h1'
              }
            },
            h1_1: {
              name: 'h1_1',
              type: 'static',
              content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
              builder: {
                type: 'h1'
              }
            },
            submit: {
              name: 'submit',
              type: 'button',
              buttonLabel: 'Submit',
              submits: true,
              builder: {
                type: 'submit'
              }
            },
            submit_1: {
              name: 'submit_1',
              type: 'button',
              buttonLabel: 'Submit',
              submits: true,
              builder: {
                type: 'submit'
              }
            }
          },
          theme: [],
          form: {
            nesting: true
          },
          export: {
            output: 'inline',
            api: 'composition',
            theme: 'none'
          },
          builder: {
            name: 'ROTOP PERTECTOR'
          }
        },
        {
          schema: {
            here: {
              name: 'here',
              type: 'text',
              label: 'Here\n',
              builder: {
                type: 'text'
              }
            },
            h1: {
              name: 'h1',
              type: 'static',
              content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
              builder: {
                type: 'h1'
              }
            },
            h1_1: {
              name: 'h1_1',
              type: 'static',
              content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
              builder: {
                type: 'h1'
              }
            },
            submit: {
              name: 'submit',
              type: 'button',
              buttonLabel: 'Submit',
              submits: true,
              builder: {
                type: 'submit'
              }
            },
            submit_1: {
              name: 'submit_1',
              type: 'button',
              buttonLabel: 'Submit',
              submits: true,
              builder: {
                type: 'submit'
              }
            },
            submit_2: {
              name: 'submit_2',
              type: 'button',
              buttonLabel: 'Submit',
              submits: true,
              builder: {
                type: 'submit'
              }
            }
          },
          theme: [],
          form: {
            nesting: true
          },
          export: {
            output: 'inline',
            api: 'composition',
            theme: 'none'
          },
          builder: {
            name: 'ROTOP PERTECTOR'
          }
        },
        {
          schema: {
            here: {
              name: 'here',
              type: 'text',
              label: 'Here\n',
              builder: {
                type: 'text'
              }
            },
            h1: {
              name: 'h1',
              type: 'static',
              content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
              builder: {
                type: 'h1'
              }
            },
            h1_1: {
              name: 'h1_1',
              type: 'static',
              content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
              builder: {
                type: 'h1'
              }
            },
            submit: {
              name: 'submit',
              type: 'button',
              buttonLabel: 'Submit',
              submits: true,
              builder: {
                type: 'submit'
              }
            },
            submit_1: {
              name: 'submit_1',
              type: 'button',
              buttonLabel: 'Submit',
              submits: true,
              builder: {
                type: 'submit'
              }
            },
            submit_2: {
              name: 'submit_2',
              type: 'button',
              buttonLabel: 'Submit',
              submits: true,
              builder: {
                type: 'submit'
              }
            },
            secondaryButton: {
              name: 'secondaryButton',
              type: 'button',
              buttonLabel: 'Button',
              secondary: true,
              builder: {
                type: 'secondaryButton'
              }
            }
          },
          theme: [],
          form: {
            nesting: true
          },
          export: {
            output: 'inline',
            api: 'composition',
            theme: 'none'
          },
          builder: {
            name: 'ROTOP PERTECTOR'
          }
        },
        {
          schema: {
            here: {
              name: 'here',
              type: 'text',
              label: 'Here\n',
              builder: {
                type: 'text'
              }
            },
            h1: {
              name: 'h1',
              type: 'static',
              content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
              builder: {
                type: 'h1'
              }
            },
            h1_1: {
              name: 'h1_1',
              type: 'static',
              content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
              builder: {
                type: 'h1'
              }
            },
            submit: {
              name: 'submit',
              type: 'button',
              buttonLabel: 'Submit',
              submits: true,
              builder: {
                type: 'submit'
              }
            },
            submit_1: {
              name: 'submit_1',
              type: 'button',
              buttonLabel: 'Submit',
              submits: true,
              builder: {
                type: 'submit'
              }
            },
            submit_2: {
              name: 'submit_2',
              type: 'button',
              buttonLabel: 'Submit',
              submits: true,
              builder: {
                type: 'submit'
              }
            },
            secondaryButton: {
              name: 'secondaryButton',
              type: 'button',
              buttonLabel: 'Button',
              secondary: true,
              builder: {
                type: 'secondaryButton'
              }
            },
            primaryButton: {
              name: 'primaryButton',
              type: 'button',
              buttonLabel: 'Button',
              builder: {
                type: 'primaryButton'
              }
            }
          },
          theme: [],
          form: {
            nesting: true
          },
          export: {
            output: 'inline',
            api: 'composition',
            theme: 'none'
          },
          builder: {
            name: 'ROTOP PERTECTOR'
          }
        },
        {
          schema: {
            here: {
              name: 'here',
              type: 'text',
              label: 'Here\n',
              builder: {
                type: 'text'
              }
            },
            h1: {
              name: 'h1',
              type: 'static',
              content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
              builder: {
                type: 'h1'
              }
            },
            h1_1: {
              name: 'h1_1',
              type: 'static',
              content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
              builder: {
                type: 'h1'
              }
            },
            submit: {
              name: 'submit',
              type: 'button',
              buttonLabel: 'Submit',
              submits: true,
              builder: {
                type: 'submit'
              }
            },
            submit_1: {
              name: 'submit_1',
              type: 'button',
              buttonLabel: 'Submit',
              submits: true,
              builder: {
                type: 'submit'
              }
            },
            submit_2: {
              name: 'submit_2',
              type: 'button',
              buttonLabel: 'Submit',
              submits: true,
              builder: {
                type: 'submit'
              }
            },
            primaryButton: {
              name: 'primaryButton',
              type: 'button',
              buttonLabel: 'Button',
              builder: {
                type: 'primaryButton'
              }
            }
          },
          theme: [],
          form: {
            nesting: true
          },
          export: {
            output: 'inline',
            api: 'composition',
            theme: 'none'
          },
          builder: {
            name: 'ROTOP PERTECTOR'
          }
        }
      ];
      builder.value.load(load, history);
    });

    return {
      route,
      builder,
      handleSave
    };
  }
});

</script>
