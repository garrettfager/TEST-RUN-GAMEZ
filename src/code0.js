gdjs.GameCode = {};
gdjs.GameCode.GDGrassObjects1= [];
gdjs.GameCode.GDGrassObjects2= [];
gdjs.GameCode.GDGrassObjects3= [];
gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDbulletObjects1= [];
gdjs.GameCode.GDbulletObjects2= [];
gdjs.GameCode.GDbulletObjects3= [];
gdjs.GameCode.GDPistolObjects1= [];
gdjs.GameCode.GDPistolObjects2= [];
gdjs.GameCode.GDPistolObjects3= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};


gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPistolObjects1Objects = Hashtable.newFrom({"Pistol": gdjs.GameCode.GDPistolObjects1});gdjs.GameCode.eventsList0x65b430 = function(runtimeScene) {

{

gdjs.GameCode.GDPlayerObjects2.createFrom(gdjs.GameCode.GDPlayerObjects1);


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].isFlippedX() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("HoldGun")) == 1;
}gdjs.GameCode.conditionTrue_1.val = true && gdjs.GameCode.condition0IsTrue_1.val;
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.GameCode.GDPistolObjects2.createFrom(gdjs.GameCode.GDPistolObjects1);

gdjs.GameCode.GDbulletObjects2.createFrom(runtimeScene.getObjects("bullet"));
{for(var i = 0, len = gdjs.GameCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPistolObjects2[i].flipX(true);
}
}{for(var i = 0, len = gdjs.GameCode.GDbulletObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbulletObjects2[i].addForce(-2000, 0, 1);
}
}}

}


{

/* Reuse gdjs.GameCode.GDPlayerObjects1 */

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDPlayerObjects1[i].isFlippedX()) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("HoldGun")) == 1;
}gdjs.GameCode.conditionTrue_1.val = true && gdjs.GameCode.condition0IsTrue_1.val;
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPistolObjects1 */
gdjs.GameCode.GDbulletObjects1.createFrom(runtimeScene.getObjects("bullet"));
{for(var i = 0, len = gdjs.GameCode.GDPistolObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPistolObjects1[i].flipX(false);
}
}{for(var i = 0, len = gdjs.GameCode.GDbulletObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbulletObjects1[i].addForce(2000, 0, 1);
}
}}

}


}; //End of gdjs.GameCode.eventsList0x65b430
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.GameCode.GDbulletObjects1});gdjs.GameCode.eventsList0xb1138 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "firerate");
}{runtimeScene.getVariables().get("HoldGun").setNumber(0);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{

gdjs.GameCode.GDPistolObjects1.createFrom(runtimeScene.getObjects("Pistol"));
gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPistolObjects1Objects, false, runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPistolObjects1 */
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
{runtimeScene.getVariables().get("HoldGun").setNumber(1);
}{for(var i = 0, len = gdjs.GameCode.GDPistolObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPistolObjects1[i].setPosition((( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getPointX("HoldGun")),(( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getPointY("HoldGun")));
}
}
{ //Subevents
gdjs.GameCode.eventsList0x65b430(runtimeScene);} //End of subevents
}

}


{


{
}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("HoldGun")) == 1;
if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if ( gdjs.GameCode.condition0IsTrue_1.val ) {
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.25, "firerate");
}}
gdjs.GameCode.conditionTrue_1.val = true && gdjs.GameCode.condition0IsTrue_1.val && gdjs.GameCode.condition1IsTrue_1.val;
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.GameCode.GDPistolObjects1.createFrom(runtimeScene.getObjects("Pistol"));
gdjs.GameCode.GDbulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbulletObjects1Objects, (( gdjs.GameCode.GDPistolObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPistolObjects1[0].getPointX("BulletPoint")), (( gdjs.GameCode.GDPistolObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPistolObjects1[0].getPointY("BulletPoint")), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}}

}


}; //End of gdjs.GameCode.eventsList0xb1138


gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.GameCode.GDGrassObjects1.length = 0;
gdjs.GameCode.GDGrassObjects2.length = 0;
gdjs.GameCode.GDGrassObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDbulletObjects1.length = 0;
gdjs.GameCode.GDbulletObjects2.length = 0;
gdjs.GameCode.GDbulletObjects3.length = 0;
gdjs.GameCode.GDPistolObjects1.length = 0;
gdjs.GameCode.GDPistolObjects2.length = 0;
gdjs.GameCode.GDPistolObjects3.length = 0;

gdjs.GameCode.eventsList0xb1138(runtimeScene);
return;
}
gdjs['GameCode'] = gdjs.GameCode;
