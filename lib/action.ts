"use server";

export const saveBlog = async (formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  console.log(data);
};
