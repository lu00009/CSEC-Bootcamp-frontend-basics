import {create} from 'zustand'
import {immer} from 'zustand/middleware/immer'
import {persist} from 'zustand/middleware'
export const initialState = {
	personalInformation: {
		firstName: "",
		lastName: "",
		email: "",
		phoneNumber: "",
	},
	handleInformation: {
		leetcode: "",
		codeforces: "",
		github: "",
	},
	credentialsInformation: {
		username: "",
		password: "",
		confirmPassword: "",
	},
};

export const actions = (set) => ({
	setPersonalInformation: (info) =>set((state) => ({ ...state, personalInformation: info })),

	setHandleInformation: (info) =>
		set((state) => ({ ...state, handleInformation: info })),

	setCredentialsInformation: (info) =>
		set((state) => ({ ...state, credentials: info })),
});

export const useSignupInfo = create(persist(
	immer((set) => ({
    ...initialState,
    ...actions(set)
  }))
)
  
)