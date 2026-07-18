import { analyzeWallet } from "./analyzer/walletAnalyzer.js";
import { adminAuth } from "./saas/enterprise/adminAuth.js";
import express from "express";
import {passportRoutes} from "./saas/enterprise/identity/passportRoutes.js";
import {credentialRoutes} from "./saas/enterprise/identity/credentialRoutes.js";
import cors from "cors";
import { gateway } 
from "./saas/gateway.js";

import { usageMiddleware }
from "./saas/usageMiddleware.js";

import { adminRoutes }
from "./saas/enterprise/adminRoutes.js";

import { identityRoutes }
from "./saas/enterprise/identity/routes.js";

import { graphRoutes }
from "./saas/enterprise/identity/graphRoutes.js";

import { intelligenceRoutes }
from "./saas/enterprise/identity/intelligenceRoutes.js";

import { scanRoutes }
from "./saas/enterprise/identity/scanRoutes.js";


const app = express();

const PORT = 3001;


// Middleware
app.use("/api/identity/passport",passportRoutes);

app.use("/api/credential",credentialRoutes);

app.use("/api/identity/passport",passportRoutes);

app.use(cors());

app.use("/api/identity/passport",passportRoutes);

app.use("/api/credential",credentialRoutes);

app.use("/api/identity/passport",passportRoutes);

app.use(express.json());


// SaaS Authentication
app.use("/api/identity/passport",passportRoutes);

app.use("/api/credential",credentialRoutes);

app.use("/api/identity/passport",passportRoutes);

app.use("/api/v1", gateway);


// Usage Tracking
app.use("/api/identity/passport",passportRoutes);

app.use("/api/credential",credentialRoutes);

app.use("/api/identity/passport",passportRoutes);

app.use(usageMiddleware);


// Enterprise Admin
app.use("/api/identity/passport",passportRoutes);

app.use("/api/credential",credentialRoutes);

app.use("/api/identity/passport",passportRoutes);

app.use(
    "/api/admin",
    gateway
);

app.use("/api/identity/passport",passportRoutes);

app.use("/api/credential",credentialRoutes);

app.use("/api/identity/passport",passportRoutes);

app.use(
    "/api/admin",
    adminAuth
);

app.use("/api/identity/passport",passportRoutes);

app.use("/api/credential",credentialRoutes);

app.use("/api/identity/passport",passportRoutes);

app.use(
    "/api/admin",
    usageMiddleware
);

app.use("/api/identity/passport",passportRoutes);

app.use("/api/credential",credentialRoutes);

app.use("/api/identity/passport",passportRoutes);

app.use(
    "/api/admin",
    adminRoutes
);


app.use("/api/identity/passport",passportRoutes);

app.use("/api/credential",credentialRoutes);

app.use("/api/identity/passport",passportRoutes);

app.use("/api/intelligence", intelligenceRoutes);
app.use("/api/identity/passport",passportRoutes);

app.use("/api/credential",credentialRoutes);

app.use("/api/identity/passport",passportRoutes);

app.use("/api/graph", graphRoutes);
app.use("/api/identity/passport",passportRoutes);

app.use("/api/credential",credentialRoutes);

app.use("/api/identity/passport",passportRoutes);

app.use("/api/intelligence", scanRoutes);

// Identity Engine V11.9
app.use("/api/identity/passport",passportRoutes);

app.use("/api/credential",credentialRoutes);

app.use("/api/identity/passport",passportRoutes);

app.use(
    "/api/identity",
    identityRoutes
);



// Health
app.get("/",(req,res)=>{

    res.json({

        name:
        "Sovereign Identity Engine",

        version:
        "V11.9 Enterprise",

        status:
        "running",

        timestamp:
        new Date().toISOString()

    });

});



// SaaS Status
app.get(
"/api/v1/status",
(req,res)=>{


    res.json({

        SaaS:"active",

        version:"V11.9",

        tenant:req.tenant || null,

        usage:req.usage || null,

        timestamp:
        new Date().toISOString()

    });


});



// Error handler
app.use("/api/identity/passport",passportRoutes);

app.use("/api/credential",credentialRoutes);

app.use("/api/identity/passport",passportRoutes);

app.use(
(err,req,res,next)=>{

console.error(err);

res.status(500).json({

error:"Internal Server Error"

});

});

app.post("/explore", async (req,res)=>{
    try {
        const {address} = req.body;

        if(!address){
            return res.status(400).json({
                success:false,
                error:"wallet address required"
            });
        }

        const result = await analyzeWallet(address);

        res.json({
            success:true,
            wallet:address,
            intelligence:result
        });

    } catch(error){

        res.status(500).json({
            success:false,
            error:error.message
        });

    }
});

app.post("/explore", async (req,res)=>{

    try {

        const { address } = req.body;

        const result = await analyzeWallet(address);

        res.json({
            success:true,
            engine:"Sovereign Identity Engine V11.9",
            wallet:address,
            analysis:result
        });

    } catch(error){

        res.status(500).json({
            success:false,
            error:error.message
        });

    }

});
app.get("/api/status", (req,res)=>{
  res.json({
    status:"online",
    engine:"Sovereign Identity Engine V11.9 Enterprise",
    port:3001,
    modules:[
      "Passport",
      "Credential",
      "Intelligence",
      "Graph"
    ],
    time:new Date().toISOString()
  });
});



// Start

app.listen(
PORT,
()=>{

console.log(
`Sovereign Identity Engine V11.9 Enterprise running on ${PORT}`
);

});

app.post("/explore",(req,res)=>{
 const {address}=req.body;
 res.json({
  success:true,
  address,
  message:"Explorer endpoint active",
  version:"V11.9"
 });
});

