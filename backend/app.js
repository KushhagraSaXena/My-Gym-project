import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js"

const app = express();
const router = express.Router();

config({ path: "./config.env" });

// console.log(process.env.PORT)
app.use(cors({
  origin:[process.env.FRONTEND_URL],
  methods:["POST"],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded ({ extended : true }))

// router.get("/",(req,res,next)=>{
//   res.json({success:true,
//     message:" Hello there join for benifits"
//   })
// });

router.post("/send/mail", async(req,res,next)=>{
  const { name, email, message} = req.body;
  if(!name || !email || !message) {
    return next(
      res.status(400).json({
        success: false,
        message:"Please provide all details",
      })
    );
  }

  try {
    await sendEmail({
      email: "kushagrasaxenaplatinum@gmail.com",
      subject: "GYM website For contact",
      message,
      userEmail: email,
    })
    res.status(200).json({
      success: true,
      message:"Message Sent Successfully."
    })
  } catch (error) {
    res.status(500).json({
      success:false,
      message:"Internal Server Error"
    });
  }
});

app.use(router); //router middleware

app.listen(process.env.PORT || 5000,()=>{
  console.log(`Server listening on port ${process.env.PORT}`);
});