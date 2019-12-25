<template>
  <div>
   <div class="container-fluid">
     <div class="col-sm-12">

     </div>
   </div>
     <div class="container-fluid">
       <div class="row">
         <div class="col-sm-4">

         </div>
         <div class="col-sm-4">
           <img src="../assets/lucky5.png" style="height:250px;width:250px;" />
         </div>
         <div class="col-sm-4">

         </div>
       </div>

     </div>
     <div class="container-fluid">
       <div class="row">
         <div class="col-sm-4">

         </div>
         <div class="col-sm-4">
           <h5 style="font-weight:bold;margin-left:30px;">INSTRUCTIONS</h5>
           <ol>
             <li>
              Enter ur Name
             </li>
             <li>
              Enter Bet Amount
             </li>
              <li>
              Select and Enter a number between 0-5
              </li>
              <li>
              Click the Try ur Luck Button after filling the fields
              </li>
              <li style="color:red">
                If Ur selected Number is equal to the computer number ur Bet amount will be Doubled.
              </li>
           </ol>
         </div>
         <div class="col-sm-4">

         </div>
       </div>

     </div>
     <div class="container-fluid">
       <div class="row">
         <div class="col-sm-4">

         </div>
         <div class="col-sm-4">
           <router-link :to="{ name: 'game', }"><button type="submit" class="btn btn-primary"style="margin-left:30px;background-color:red;width:250px;">START GAME</button></router-link>
         </div>
         <div class="col-sm-4">

         </div>
       </div>
     </div>

  </div>
</template>
<script>



</script>

<style>




</style>
