// eslint-disable-next-line no-useless-escape
const regex = /https?:\/\/(?:www\.)?([-a-zA-Z0-9@:%._\+~#=]{2,}\.[a-zA-Z]{1,3}\b)(\/[\/\d\w\.-]*)*(?:[\?])*(.+)*[#]?/;
const JWT_SECRET_DEV = 'super-strong-secret';

module.exports = { regex, JWT_SECRET_DEV };
