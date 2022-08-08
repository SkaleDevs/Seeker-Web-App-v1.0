import Bank from '../model/seekerBankSchema';
import SeekerForm from '../model/seekerMyApplicationSchema.js';
import Seeker from '../model/seekerSchema';

export const getMyForms = async (request, response) => {
    try {
        const forms = await SeekerForm.find({email:request.params.email});
        response.status(201).json(forms);
    }catch (error) {
        response.status(500).json(error);
    }
}

