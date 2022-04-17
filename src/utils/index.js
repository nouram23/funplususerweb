const cloudinary = {
    getUrl(url, value) {
        if (url && url.length > 0) {
            const arrUrls = url.split("image/upload")
            return `${arrUrls[0]}image/upload/${value}${arrUrls[1]}`
        } else {
            return "/no-image.png"
        }
    }
}

const Utils = {
    cloudinary
}

export default Utils;

export const mn_mobile_regex = /[8|9][0|3|5|6|8|9][0-9][0-9][0-9][0-9][0-9][0-9]/;
export const password_regex = {
    digit: /(?=.*\d)/,
    lowercase: /(?=.*[a-z])/,
    special_character: /(?=.*[\W])/,
}