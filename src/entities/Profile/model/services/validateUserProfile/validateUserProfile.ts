import { type ProfileTypePartial, ValidateProfileErrors } from '../../types/profile'

export const validateUserProfile = (profile: ProfileTypePartial) => {
    const errors: ValidateProfileErrors[] = []
    const {
        age,
        country,
        instagram,
        lastName,
        firstName
    } = profile
    if (country && country.length < 2) {
        errors.push(ValidateProfileErrors.INCORRECT_COUNTRY)
    }
    if (age && (age < 0 || age > 150 || !Number.isInteger(age))) {
        errors.push(ValidateProfileErrors.INCORRECT_AGE)
    }
    if (lastName && (lastName.trim().length < 2 || lastName.trim().length > 30)) {
        errors.push(ValidateProfileErrors.INCORRECT_LASTNAME)
    }
    if (firstName && (firstName.trim().length < 2 || firstName.trim().length > 30)) {
        errors.push(ValidateProfileErrors.INCORRECT_FIRSTNAME)
    }
    if (!(/[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/.test(instagram ?? ''))) {
        errors.push(ValidateProfileErrors.INCORRECT_INSTAGRAM)
    }
    return errors
}
