import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            en: {
                translation: {
                }
            },
            cn: {
                translation: {
                    "Score Board": "分数板",
                    "Score Range": "分数范围",
                    "From": "从",
                    "To": "到",
                    "Class Range": "类范围",
                    "Name": "名字",
                    "Score": "分数",
                    "Class": "类",
                    "Action": "行动",
                    "Delete": "删除",
                    "Add": "添加",
                    "Close": "关闭",
                    "Save": "保存",
                    "Create A Record": "创建记录",
                }
            }
        },
        lng: "en", // if you're using a language detector, do not define the lng option
        fallbackLng: "en",

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });