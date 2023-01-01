function apiKeys(req,res,next){
   const apiKey = '123456';
   const userApiKey = req.query.apiKey;
   if(userApiKey && (userApiKey === apiKey)){
    next();
   }else{
    res.json({message:'Access Denied '});
   }

   next();
}

export default apiKeys;