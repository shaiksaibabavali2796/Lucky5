<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 " style="margin-top:-60px;">
                   <div class="row">
                     <div class="col-lg-6" style="background-color:red">
                     </div>
                     <div class="col-lg-6" style="background-color:black;">

                           <img style="width:50px;height:60px;float:right" src="../assets/dollar.png"   />
                     </div>
                   </div>


        </div>


    </div>
        </div>


  <div class="container-fluid">
    <div class="row">

      <div id="div1"class="col-sm-6">
         <img style="width:150px;height:150px;float:left;position:absolute;left:40px;top:-60px;" src="../assets/lucky5.png"   />
         <div>
           <img src="../assets/moneybag.png" style="position:absolute;height:150px;width:100px;top:260px;left:10px;"/>
         </div>





        <form>


          <div class="form-group" style="margin-top:150px;">

            <input class="form-control" for="Name" placeholder="Name"  v-model="name" style="width:300px;margin-left:150px;" /></input>
          </div>
          <div class="form-group" >

            <input class="form-control" for="amount" placeholder="Amount u bet" v-model="amount" style="width:300px;margin-left:150px;" />
          </div>
            <div class="form-group" >

              <input class="form-control" for="Number" placeholder="Number" v-model="number"  style="width:300px;margin-left:150px;" />
            </div>

            <div>
              <p style="color:yellow;text-align:center;padding-right:50px;">
                Please Click the Button after Inputting values.
              </p>
              <section>
                <button @click="randomnumber()" class="btn btn-dark" style="margin-left:-50px;">TRY UR LUCK</button>
              </section>


            </div>
            <div>
              <img src="../assets/moneybag.png" style="position:absolute;height:150px;width:100px;right:-10px;top:40px;"/>
            </div>

        </form>
      </div>
      <div id="div2" class="col-sm-6">
            <div id="inner" style="margin-top:10px;">
              <h5 style="text-align:left;font-family:fantasy">
                Name:&nbsp;<span style="color:yellow; " >&nbsp;{{name}}</span>

              </h5>
                <h5 style="color:white;text-align:left; font-family:fantasy">Bet amount:&nbsp;<span style="color:yellow">&nbsp;{{amount}}</span></h5>
               <h5 style="text-align:left;font-family:fantasy">
                 Selected Number:&nbsp;<span style="color:yellow; ">&nbsp;{{number}}</span>
               </h5>
                <h5 style="color:white;text-align:left;font-family:fantasy">Computer Generated number:&nbsp;<span style="color:yellow">&nbsp;{{computernumber}}</span></h5>

                <h5 style="color:red;text-align:left;font-family:fantasy; font-size:25px;">Result:&nbsp;</h5>




            </div>
            <div style="border:1px dotted red">
              <h5 style="font-size:50px;color:green;font-family:fantasy;margin-top:120px;margin-bottom:20px;">{{result}}</h5>
            </div>
            <div style="border:1px solid yellow">
              <h4 style="font-size:25px; color:yellow;font-family:impact,fantasy">{{warning}}</h4>
            </div>



      </div>

    </div>
  </div>
  <div class="container-fluid">
   <div class="row">
     <div class="col-sm-6" style="background-color:red;">
              <img style="width:100px;height:100px;float:right" src="../assets/moneybag.png"   />
     </div>
     <div class="col-sm-6" style="background-color:black;">
              <img style="width:50px;height:60px;float:right" src="../assets/dollar.png"   />
     </div>
   </div>

  </div>

  </div>
</template>

<script>
export default{
  name:'game',
  data(){
     return{

       name:'',
       number:'',
       computernumber:'',
       result:'',
       amount:'',





     }
  },
  methods:{
    randomnumber(){
      var randomvalue = Math.floor(Math.random() * 6);
      this.computernumber =  randomvalue;



      var num = this.number;
      var image = this.link;
      var amt =this.amount;
      var nm = this.name;

      if(randomvalue == num){
        this.result = "Congratulations.!"+""+nm+" "+"Ur money Got Doubled" + " "+amt * 2;
        this.warning = "Refresh the page to start New game"


      }
      else if(nm == ''){
        this.computernumber = ""
        alert("please enter ur name")
        this.result =" "
        this.num = " "
      }

      else if(amt == ''){
        this.computernumber = ""
        alert("please enter the bet amount")
        this.result =" "
        this.num = " "
      }
      else if(num >= 6){
        // this.result = "Please enter the digits between  0 - 5"

        alert("Please select the digits between 0-5")
        this.result=""
        this.num = ""


      }



      else{
        this.result = "Better luck Next Time" +" "+ nm +" "+ "U lost ur Money" + amt;
        this.warning = "Press F5 start New game"



      }

    },


  },

}

</script>

<style>
#div1{

  border:5px 0px 0px 0px solid black;
  width: 500px;
  height: 500px;
  background-color: red
}
#div2{
  border:5px 0px 0px 0px solid red;
  width: 500px;
  height:500px;
  background-color: black;
}
#inner{

  color:white;
}
</style>
