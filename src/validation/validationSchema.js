import * as Yup from 'yup';
export const categoryFormSchema = Yup.object({
  CategoryName: Yup.string().required(),
  CategoryImgURL: Yup.string().required().url(),
}).required();

export const productFormSchema = Yup.object({
  productName: Yup.string().required('Product Name is required.'),
  productPrice: Yup.number()
    .required('Product Price is required.')
    .positive('Price must be a positive number.')
    .min(1, 'Price must be at least 1.'),
  productImgUrl: Yup.string()
    .required('Image URL is required.')
    .url('Enter a valid URL.'),
});

export const registerValidation = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters')
    .max(30, 'Name cannot exceed 30 characters'),

  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});
export const loginValidation = Yup.object({
  email: Yup.string()
    .required('Email is required.')
    .email('Please enter a valid email address.'),

  password: Yup.string()
    .required('Password is required.')
    .min(8, 'Password must be at least 8 characters.'),
}).required();
