export const token = {access: '9662d4f69ce76ad76e7f18b3e6b60d7a53faf622'};
export const id = token.access;
export const access = {
    headers: {
        Authorization: "Basic" + btoa(id)
    }
};