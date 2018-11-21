gdjs.GameCode = {};
gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDFartObjects1= [];
gdjs.GameCode.GDFartObjects2= [];
gdjs.GameCode.GDFartObjects3= [];
gdjs.GameCode.GDGrassObjects1= [];
gdjs.GameCode.GDGrassObjects2= [];
gdjs.GameCode.GDGrassObjects3= [];
gdjs.GameCode.GDRedGuyObjects1= [];
gdjs.GameCode.GDRedGuyObjects2= [];
gdjs.GameCode.GDRedGuyObjects3= [];
gdjs.GameCode.GDbulletObjects1= [];
gdjs.GameCode.GDbulletObjects2= [];
gdjs.GameCode.GDbulletObjects3= [];
gdjs.GameCode.GDPistolObjects1= [];
gdjs.GameCode.GDPistolObjects2= [];
gdjs.GameCode.GDPistolObjects3= [];
gdjs.GameCode.GDBubblesObjects1= [];
gdjs.GameCode.GDBubblesObjects2= [];
gdjs.GameCode.GDBubblesObjects3= [];
gdjs.GameCode.GDPlayerHitboxObjects1= [];
gdjs.GameCode.GDPlayerHitboxObjects2= [];
gdjs.GameCode.GDPlayerHitboxObjects3= [];
gdjs.GameCode.GDWallObjects1= [];
gdjs.GameCode.GDWallObjects2= [];
gdjs.GameCode.GDWallObjects3= [];
gdjs.GameCode.GDGoLeftObjects1= [];
gdjs.GameCode.GDGoLeftObjects2= [];
gdjs.GameCode.GDGoLeftObjects3= [];
gdjs.GameCode.GDGoRightObjects1= [];
gdjs.GameCode.GDGoRightObjects2= [];
gdjs.GameCode.GDGoRightObjects3= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};


gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGoLeftObjects1Objects = Hashtable.newFrom({"GoLeft": gdjs.GameCode.GDGoLeftObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRedGuyObjects1Objects = Hashtable.newFrom({"RedGuy": gdjs.GameCode.GDRedGuyObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGoRightObjects1Objects = Hashtable.newFrom({"GoRight": gdjs.GameCode.GDGoRightObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRedGuyObjects1Objects = Hashtable.newFrom({"RedGuy": gdjs.GameCode.GDRedGuyObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDFartObjects1Objects = Hashtable.newFrom({"Fart": gdjs.GameCode.GDFartObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBubblesObjects1Objects = Hashtable.newFrom({"Bubbles": gdjs.GameCode.GDBubblesObjects1});gdjs.GameCode.eventsList0x7ff180 = function(runtimeScene) {

{

gdjs.GameCode.GDPlayerObjects2.createFrom(gdjs.GameCode.GDPlayerObjects1);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].isFlippedX() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDBubblesObjects2.createFrom(gdjs.GameCode.GDBubblesObjects1);

gdjs.GameCode.GDFartObjects2.createFrom(gdjs.GameCode.GDFartObjects1);

{for(var i = 0, len = gdjs.GameCode.GDBubblesObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBubblesObjects2[i].addPolarForce(180, 500, 1);
}
}{for(var i = 0, len = gdjs.GameCode.GDFartObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFartObjects2[i].addPolarForce(180, 500, 1);
}
}{for(var i = 0, len = gdjs.GameCode.GDBubblesObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBubblesObjects2[i].setAngle(0);
}
}}

}


{

/* Reuse gdjs.GameCode.GDPlayerObjects1 */

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDPlayerObjects1[i].isFlippedX()) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBubblesObjects1 */
/* Reuse gdjs.GameCode.GDFartObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDBubblesObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBubblesObjects1[i].addPolarForce(0, 500, 1);
}
}{for(var i = 0, len = gdjs.GameCode.GDFartObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFartObjects1[i].addPolarForce(0, 500, 1);
}
}{for(var i = 0, len = gdjs.GameCode.GDBubblesObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBubblesObjects1[i].setAngle(180);
}
}}

}


}; //End of gdjs.GameCode.eventsList0x7ff180
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRedGuyObjects1Objects = Hashtable.newFrom({"RedGuy": gdjs.GameCode.GDRedGuyObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDFartObjects1Objects = Hashtable.newFrom({"Fart": gdjs.GameCode.GDFartObjects1});gdjs.GameCode.eventsList0xb0908 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDGoLeftObjects1.createFrom(runtimeScene.getObjects("GoLeft"));
gdjs.GameCode.GDGoRightObjects1.createFrom(runtimeScene.getObjects("GoRight"));
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "firerate");
}{for(var i = 0, len = gdjs.GameCode.GDGoLeftObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGoLeftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDGoRightObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGoRightObjects1[i].hide();
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "..\\..\\Documents\\ASSETZ\\118928__mikobuntu__gross5.ogg", true, 10, 1);
}}

}


{


{
gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.GameCode.GDPlayerHitboxObjects1.createFrom(runtimeScene.getObjects("PlayerHitbox"));
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setPosition((( gdjs.GameCode.GDPlayerHitboxObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerHitboxObjects1[0].getPointX("")),(( gdjs.GameCode.GDPlayerHitboxObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerHitboxObjects1[0].getPointY("")));
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.GameCode.GDPlayerObjects1.length !== 0 ? gdjs.GameCode.GDPlayerObjects1[0] : null), false, "", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}}

}


{

gdjs.GameCode.GDPlayerHitboxObjects1.createFrom(runtimeScene.getObjects("PlayerHitbox"));

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerHitboxObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerHitboxObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerHitboxObjects1[k] = gdjs.GameCode.GDPlayerHitboxObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerHitboxObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerHitboxObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDPlayerHitboxObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerHitboxObjects1[k] = gdjs.GameCode.GDPlayerHitboxObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerHitboxObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setAnimationName("Idle");
}
}}

}


{

gdjs.GameCode.GDPlayerHitboxObjects1.createFrom(runtimeScene.getObjects("PlayerHitbox"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerHitboxObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerHitboxObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerHitboxObjects1[k] = gdjs.GameCode.GDPlayerHitboxObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerHitboxObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setAnimationName("Jump");
}
}}

}


{

gdjs.GameCode.GDPlayerHitboxObjects1.createFrom(runtimeScene.getObjects("PlayerHitbox"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerHitboxObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerHitboxObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerHitboxObjects1[k] = gdjs.GameCode.GDPlayerHitboxObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerHitboxObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setAnimationFrame(6);
}
}}

}


{

gdjs.GameCode.GDGoLeftObjects1.createFrom(runtimeScene.getObjects("GoLeft"));
gdjs.GameCode.GDRedGuyObjects1.createFrom(runtimeScene.getObjects("RedGuy"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGoLeftObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRedGuyObjects1Objects, false, runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("GoingLeft").setNumber(1);
}}

}


{

gdjs.GameCode.GDGoRightObjects1.createFrom(runtimeScene.getObjects("GoRight"));
gdjs.GameCode.GDRedGuyObjects1.createFrom(runtimeScene.getObjects("RedGuy"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGoRightObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRedGuyObjects1Objects, false, runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("GoingLeft").setNumber(0);
}}

}


{

gdjs.GameCode.GDPlayerHitboxObjects1.createFrom(runtimeScene.getObjects("PlayerHitbox"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerHitboxObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerHitboxObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerHitboxObjects1[k] = gdjs.GameCode.GDPlayerHitboxObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerHitboxObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setAnimationName("Run");
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GoingLeft")) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDRedGuyObjects1.createFrom(runtimeScene.getObjects("RedGuy"));
{for(var i = 0, len = gdjs.GameCode.GDRedGuyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRedGuyObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.GameCode.GDRedGuyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRedGuyObjects1[i].flipX(false);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GoingLeft")) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDRedGuyObjects1.createFrom(runtimeScene.getObjects("RedGuy"));
{for(var i = 0, len = gdjs.GameCode.GDRedGuyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRedGuyObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.GameCode.GDRedGuyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRedGuyObjects1[i].flipX(true);
}
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


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "firerate");
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.GameCode.GDBubblesObjects1.length = 0;

gdjs.GameCode.GDFartObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDFartObjects1Objects, (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getPointX("")), (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getPointY("")), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBubblesObjects1Objects, (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getPointX("")), (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getPointY("")), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}{gdjs.evtTools.sound.playSound(runtimeScene, "..\\..\\Documents\\ASSETZ\\Quick Fart-SoundBible.com-655578646.wav", false, 100, 1);
}
{ //Subevents
gdjs.GameCode.eventsList0x7ff180(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "a"));
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = !(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.50, "firerate"));
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
}

}


{

gdjs.GameCode.GDFartObjects1.createFrom(runtimeScene.getObjects("Fart"));
gdjs.GameCode.GDRedGuyObjects1.createFrom(runtimeScene.getObjects("RedGuy"));

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRedGuyObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDFartObjects1Objects, false, runtimeScene);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "yellrate");
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "..\\..\\Documents\\ASSETZ\\254337__jagadamba__male-shouting-yelling-hey.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "yellrate");
}}

}


{


{
}

}


{


{
}

}


{


{
}

}


{


{
}

}


}; //End of gdjs.GameCode.eventsList0xb0908


gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDFartObjects1.length = 0;
gdjs.GameCode.GDFartObjects2.length = 0;
gdjs.GameCode.GDFartObjects3.length = 0;
gdjs.GameCode.GDGrassObjects1.length = 0;
gdjs.GameCode.GDGrassObjects2.length = 0;
gdjs.GameCode.GDGrassObjects3.length = 0;
gdjs.GameCode.GDRedGuyObjects1.length = 0;
gdjs.GameCode.GDRedGuyObjects2.length = 0;
gdjs.GameCode.GDRedGuyObjects3.length = 0;
gdjs.GameCode.GDbulletObjects1.length = 0;
gdjs.GameCode.GDbulletObjects2.length = 0;
gdjs.GameCode.GDbulletObjects3.length = 0;
gdjs.GameCode.GDPistolObjects1.length = 0;
gdjs.GameCode.GDPistolObjects2.length = 0;
gdjs.GameCode.GDPistolObjects3.length = 0;
gdjs.GameCode.GDBubblesObjects1.length = 0;
gdjs.GameCode.GDBubblesObjects2.length = 0;
gdjs.GameCode.GDBubblesObjects3.length = 0;
gdjs.GameCode.GDPlayerHitboxObjects1.length = 0;
gdjs.GameCode.GDPlayerHitboxObjects2.length = 0;
gdjs.GameCode.GDPlayerHitboxObjects3.length = 0;
gdjs.GameCode.GDWallObjects1.length = 0;
gdjs.GameCode.GDWallObjects2.length = 0;
gdjs.GameCode.GDWallObjects3.length = 0;
gdjs.GameCode.GDGoLeftObjects1.length = 0;
gdjs.GameCode.GDGoLeftObjects2.length = 0;
gdjs.GameCode.GDGoLeftObjects3.length = 0;
gdjs.GameCode.GDGoRightObjects1.length = 0;
gdjs.GameCode.GDGoRightObjects2.length = 0;
gdjs.GameCode.GDGoRightObjects3.length = 0;

gdjs.GameCode.eventsList0xb0908(runtimeScene);
return;
}
gdjs['GameCode'] = gdjs.GameCode;
