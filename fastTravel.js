import*as e from"three";let fastTravelLocations=[{name:"Left Wall",position:{x:-38,y:20,z:0}},{name:"Right wall ",position:{x:50,y:20,z:0}},{name:"Statue",position:{x:3,y:20,z:20}},{name:"Forward",position:{x:0,y:20,z:-35}},{name:"Entrence Door",position:{x:-6,y:20,z:82}},];function initializeFastTravelMenu(e){document.getElementById("fast-travel-menu");let t=document.getElementById("fast-travel-select"),o=document.getElementById("fast-travel-button");fastTravelLocations.forEach((e,o)=>{let n=document.createElement("option");n.value=o,n.textContent=e.name,t.appendChild(n)}),o.addEventListener("click",()=>{let o=t.value;if(""===o){alert("Please select a location!");return}let n=fastTravelLocations[o].position;smoothCameraMove(e,n)})}function smoothCameraMove(t,o){let n=performance.now(),a=t.position.clone();!function i(){let l=(performance.now()-n)/1e3,s=Math.min(l/1,1);t.position.lerpVectors(a,new e.Vector3(o.x,o.y,o.z),s),s<1&&requestAnimationFrame(i)}()}export{initializeFastTravelMenu};
