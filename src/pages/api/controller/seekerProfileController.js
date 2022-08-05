import Bank from '../model/seekerBankSchema';
import SeekerForm from '../model/seekerFormSchema.js';
import Seeker from '../model/seekerSchema';

export const getMyForms = async (request, response) => {
    try {
        const forms = await SeekerForm.find({email:request.params.email});
        response.status(201).json(forms);
    }catch (error) {
        response.status(500).json(error);
    }
}

export const postProduct = async (request, response) => {
    try {
        console.log(request.body)
        Product.findOne({productID:request.body.productID})
        .then(user=>{
            if(user){
               return response.json({message:"Already Listed"})
            }
        })
          const product=new Product({
            productID:request.body.productID,
               product_name:request.body.product_name,
               price:request.body.price,
               product_image:request.body.product_image,
               discription:request.body.discription,
               expiry:request.body.expirys
          })
          product.save()
          .then(user=>{
           // console.log(user._id)
            if(user){
                response.status(201).json({message:"Successfully Product Uploaded"})
            }
            else{
                return response.status(500).json({error:"Try Again Later!"})
            }
        }).catch((err)=>{
            response.status(500).json(error);
        })
        }
        
    catch (error) {
        response.json(error);
    }
}