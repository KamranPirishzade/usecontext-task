const errorLabels = {
  username: {
    short: {
      en: "Username is too short.",
      az: "İstifadəçi adı çox qısadır.",
      ru: "Имя пользователя слишком короткое.",
    },
    long: {
      en: "Username is too long.",
      az: "İstifadəçi adı çox uzundur.",
      ru: "Имя пользователя слишком длинное.",
    },
    invalidCharacters: {
      en: "Username contains invalid characters. Only letters, numbers, dots, and underscores are allowed.",
      az: "İstifadəçi adında yalnız hərflər, rəqəmlər, nöqtə və alt xətt ola bilər.",
      ru: "Имя пользователя содержит недопустимые символы. Разрешены только буквы, цифры, точки и нижнее подчёркивание.",
    },
    noStart: {
      en: "Username cannot start with a dot or underscore.",
      az: "İstifadəçi adı nöqtə və ya alt xətlə başlaya bilməz.",
      ru: "Имя пользователя не может начинаться с точки или нижнего подчёркивания.",
    },
    noEnd: {
      en: "Username cannot end with a dot or underscore.",
      az: "İstifadəçi adı nöqtə və ya alt xətlə bitə bilməz.",
      ru: "Имя пользователя не может заканчиваться точкой или нижним подчёркиванием.",
    },
    valid: {
      en: "valid",
      az: "doğru",
      ru: "валидно",
    },
  },

  email: {
    required: {
      en: "Please enter email (required)",
      az: "Zəhmət olmasa email daxil edin (vacibdir)",
      ru: "Пожалуйста, введите email (обязательно)",
    },
    oneAt: {
      en: "Email should contain one @ symbol",
      az: "Email yalnız bir @ simvolu içərməlidir",
      ru: "Email должен содержать только один символ @",
    },
    accountLong: {
      en: "Account length should not be over 64 characters",
      az: "Email-in istifadəçi hissəsi 64 simvoldan böyük ola bilməz",
      ru: "Имя пользователя в email не должно превышать 64 символа",
    },
    domainLong: {
      en: "Domain length should not be over 255 characters",
      az: "Domen uzunluğu 255 simvoldan artıq ola bilməz",
      ru: "Домен не должен превышать 255 символов",
    },
    domainPartLong: {
      en: "Email domain is not valid",
      az: "Email domeni etibarlı deyil",
      ru: "Доменная часть email недействительна",
    },
    invalid: {
      en: "Please enter a valid email address",
      az: "Zəhmət olmasa düzgün email daxil edin",
      ru: "Пожалуйста, введите корректный email",
    },
    valid: {
      en: "valid",
      az: "doğru",
      ru: "валидно",
    },
  },

  pass: {
    short: {
      en: "Password should be minimum 8 characters",
      az: "Şifrə minimum 8 simvoldan ibarət olmalıdır",
      ru: "Пароль должен содержать минимум 8 символов",
    },
    noUpper: {
      en: "Password should contain minimum one uppercase letter",
      az: "Şifrə ən az bir böyük hərf içərməlidir",
      ru: "Пароль должен содержать хотя бы одну заглавную букву",
    },
    noLower: {
      en: "Password should contain minimum one lowercase letter",
      az: "Şifrə ən az bir kiçik hərf içərməlidir",
      ru: "Пароль должен содержать хотя бы одну строчную букву",
    },
    valid: {
      en: "valid",
      az: "doğru",
      ru: "валидно",
    },
  },
};

export default errorLabels;
