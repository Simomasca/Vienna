gdjs.FumettoCode = {};
gdjs.FumettoCode.localVariables = [];
gdjs.FumettoCode.GD_95951Objects1= [];
gdjs.FumettoCode.GD_95951Objects2= [];
gdjs.FumettoCode.GD_95951Objects3= [];
gdjs.FumettoCode.GD_95951Objects4= [];
gdjs.FumettoCode.GD_95951Objects5= [];
gdjs.FumettoCode.GD_95951Objects6= [];
gdjs.FumettoCode.GD_95952Objects1= [];
gdjs.FumettoCode.GD_95952Objects2= [];
gdjs.FumettoCode.GD_95952Objects3= [];
gdjs.FumettoCode.GD_95952Objects4= [];
gdjs.FumettoCode.GD_95952Objects5= [];
gdjs.FumettoCode.GD_95952Objects6= [];
gdjs.FumettoCode.GDSfondoObjects1= [];
gdjs.FumettoCode.GDSfondoObjects2= [];
gdjs.FumettoCode.GDSfondoObjects3= [];
gdjs.FumettoCode.GDSfondoObjects4= [];
gdjs.FumettoCode.GDSfondoObjects5= [];
gdjs.FumettoCode.GDSfondoObjects6= [];
gdjs.FumettoCode.GDBackground_9595BlurObjects1= [];
gdjs.FumettoCode.GDBackground_9595BlurObjects2= [];
gdjs.FumettoCode.GDBackground_9595BlurObjects3= [];
gdjs.FumettoCode.GDBackground_9595BlurObjects4= [];
gdjs.FumettoCode.GDBackground_9595BlurObjects5= [];
gdjs.FumettoCode.GDBackground_9595BlurObjects6= [];
gdjs.FumettoCode.GDTransitionObjects1= [];
gdjs.FumettoCode.GDTransitionObjects2= [];
gdjs.FumettoCode.GDTransitionObjects3= [];
gdjs.FumettoCode.GDTransitionObjects4= [];
gdjs.FumettoCode.GDTransitionObjects5= [];
gdjs.FumettoCode.GDTransitionObjects6= [];


gdjs.FumettoCode.mapOfGDgdjs_9546FumettoCode_9546GDSfondoObjects1Objects = Hashtable.newFrom({"Sfondo": gdjs.FumettoCode.GDSfondoObjects1});
gdjs.FumettoCode.mapOfGDgdjs_9546FumettoCode_9546GDBackground_95959595BlurObjects1Objects = Hashtable.newFrom({"Background_Blur": gdjs.FumettoCode.GDBackground_9595BlurObjects1});
gdjs.FumettoCode.mapOfGDgdjs_9546FumettoCode_9546GD_959595951Objects1Objects = Hashtable.newFrom({"_1": gdjs.FumettoCode.GD_95951Objects1});
gdjs.FumettoCode.mapOfGDgdjs_9546FumettoCode_9546GD_959595952Objects1Objects = Hashtable.newFrom({"_2": gdjs.FumettoCode.GD_95952Objects1});
gdjs.FumettoCode.mapOfGDgdjs_9546FumettoCode_9546GDTransitionObjects1Objects = Hashtable.newFrom({"Transition": gdjs.FumettoCode.GDTransitionObjects1});
gdjs.FumettoCode.asyncCallback35677780 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FumettoCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Sfondo"), gdjs.FumettoCode.GDSfondoObjects6);

{for(var i = 0, len = gdjs.FumettoCode.GDSfondoObjects6.length ;i < len;++i) {
    gdjs.FumettoCode.GDSfondoObjects6[i].returnVariable(gdjs.FumettoCode.GDSfondoObjects6[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}gdjs.FumettoCode.localVariables.length = 0;
}
gdjs.FumettoCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.FumettoCode.localVariables);
/* Don't save Sfondo as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3.5), (runtimeScene) => (gdjs.FumettoCode.asyncCallback35677780(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.FumettoCode.asyncCallback35677612 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FumettoCode.localVariables);
{gdjs.evtTools.sound.playSound(runtimeScene, "Whoosh Sounds effects No copyright [pqEn9icjK0I]2.wav", false, 100, 1.5);
}
{ //Subevents
gdjs.FumettoCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.FumettoCode.localVariables.length = 0;
}
gdjs.FumettoCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.FumettoCode.localVariables);
/* Don't save Sfondo as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.15), (runtimeScene) => (gdjs.FumettoCode.asyncCallback35677612(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.FumettoCode.asyncCallback35677204 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FumettoCode.localVariables);
{gdjs.evtTools.sound.playSound(runtimeScene, "Angry Robot Bird SOUND Effect - SOUND Effects Public Domain (No Copyrights).mp3", false, 75, 1.25);
}
{ //Subevents
gdjs.FumettoCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.FumettoCode.localVariables.length = 0;
}
gdjs.FumettoCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.FumettoCode.localVariables);
/* Don't save Sfondo as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.FumettoCode.asyncCallback35677204(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.FumettoCode.asyncCallback35677004 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FumettoCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("_2"), gdjs.FumettoCode.GD_95952Objects3);

{for(var i = 0, len = gdjs.FumettoCode.GD_95952Objects3.length ;i < len;++i) {
    gdjs.FumettoCode.GD_95952Objects3[i].getBehavior("Tween").addObjectPositionXTween2("1", (gdjs.FumettoCode.GD_95952Objects3[i].getPointX("")) - 3000, "swingFromTo", 2, false);
}
}
{ //Subevents
gdjs.FumettoCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.FumettoCode.localVariables.length = 0;
}
gdjs.FumettoCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.FumettoCode.localVariables);
/* Don't save Sfondo as it will be provided by the parent asyncObjectsList. */
/* Don't save _2 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.FumettoCode.asyncCallback35677004(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.FumettoCode.asyncCallback35676116 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FumettoCode.localVariables);
{gdjs.evtTools.sound.playSound(runtimeScene, "Whoosh Sounds effects No copyright [pqEn9icjK0I]2.wav", false, 100, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Evil Laugh Sound Effect [3uQPzFFlwpE]2.wav", false, 100, 1);
}
{ //Subevents
gdjs.FumettoCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.FumettoCode.localVariables.length = 0;
}
gdjs.FumettoCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.FumettoCode.localVariables);
for (const obj of gdjs.FumettoCode.GDSfondoObjects1) asyncObjectsList.addObject("Sfondo", obj);
for (const obj of gdjs.FumettoCode.GD_95952Objects1) asyncObjectsList.addObject("_2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.FumettoCode.asyncCallback35676116(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.FumettoCode.asyncCallback35680492 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FumettoCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Livello 1", false);
}gdjs.FumettoCode.localVariables.length = 0;
}
gdjs.FumettoCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.FumettoCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.FumettoCode.asyncCallback35680492(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.FumettoCode.mapOfGDgdjs_9546FumettoCode_9546GDSfondoObjects1Objects = Hashtable.newFrom({"Sfondo": gdjs.FumettoCode.GDSfondoObjects1});
gdjs.FumettoCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(11).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(35674220);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background_Blur"), gdjs.FumettoCode.GDBackground_9595BlurObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sfondo"), gdjs.FumettoCode.GDSfondoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.FumettoCode.GDTransitionObjects1);
gdjs.copyArray(runtimeScene.getObjects("_1"), gdjs.FumettoCode.GD_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs.FumettoCode.GD_95952Objects1);
{gdjs.evtsExt__AlignObject__ToSceneCentered.func(runtimeScene, gdjs.FumettoCode.mapOfGDgdjs_9546FumettoCode_9546GDSfondoObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AlignObject__ToSceneCentered.func(runtimeScene, gdjs.FumettoCode.mapOfGDgdjs_9546FumettoCode_9546GDBackground_95959595BlurObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AlignObject__ToSceneCentered.func(runtimeScene, gdjs.FumettoCode.mapOfGDgdjs_9546FumettoCode_9546GD_959595951Objects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AlignObject__ToSceneCentered.func(runtimeScene, gdjs.FumettoCode.mapOfGDgdjs_9546FumettoCode_9546GD_959595952Objects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AlignObject__ToSceneCentered.func(runtimeScene, gdjs.FumettoCode.mapOfGDgdjs_9546FumettoCode_9546GDTransitionObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.FumettoCode.GD_95951Objects1.length ;i < len;++i) {
    gdjs.FumettoCode.GD_95951Objects1[i].setX(gdjs.FumettoCode.GD_95951Objects1[i].getX() - (3000));
}
}{for(var i = 0, len = gdjs.FumettoCode.GD_95952Objects1.length ;i < len;++i) {
    gdjs.FumettoCode.GD_95952Objects1[i].setX(gdjs.FumettoCode.GD_95952Objects1[i].getX() + (3000));
}
}{for(var i = 0, len = gdjs.FumettoCode.GD_95951Objects1.length ;i < len;++i) {
    gdjs.FumettoCode.GD_95951Objects1[i].getBehavior("Tween").addObjectPositionXTween2("1", (gdjs.FumettoCode.GD_95951Objects1[i].getPointX("")) + 3000, "swingFromTo", 2, false);
}
}
{ //Subevents
gdjs.FumettoCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(11).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.FumettoCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.FumettoCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.FumettoCode.GDTransitionObjects1[i].getBehavior("Opacity").setOpacity(gdjs.FumettoCode.GDTransitionObjects1[i].getBehavior("Opacity").getOpacity() - (5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sfondo"), gdjs.FumettoCode.GDSfondoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FumettoCode.GDSfondoObjects1.length;i<l;++i) {
    if ( gdjs.FumettoCode.GDSfondoObjects1[i].getVariableBoolean(gdjs.FumettoCode.GDSfondoObjects1[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.FumettoCode.GDSfondoObjects1[k] = gdjs.FumettoCode.GDSfondoObjects1[i];
        ++k;
    }
}
gdjs.FumettoCode.GDSfondoObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.FumettoCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.FumettoCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.FumettoCode.GDTransitionObjects1[i].getBehavior("Opacity").setOpacity(gdjs.FumettoCode.GDTransitionObjects1[i].getBehavior("Opacity").getOpacity() + (5));
}
}{runtimeScene.getGame().getVariables().getFromIndex(11).setBoolean(true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.FumettoCode.GDTransitionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FumettoCode.GDTransitionObjects1.length;i<l;++i) {
    if ( gdjs.FumettoCode.GDTransitionObjects1[i].getBehavior("Opacity").getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs.FumettoCode.GDTransitionObjects1[k] = gdjs.FumettoCode.GDTransitionObjects1[i];
        ++k;
    }
}
gdjs.FumettoCode.GDTransitionObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.FumettoCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(35681484);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Sfondo"), gdjs.FumettoCode.GDSfondoObjects1);
{for(var i = 0, len = gdjs.FumettoCode.GDSfondoObjects1.length ;i < len;++i) {
    gdjs.FumettoCode.GDSfondoObjects1[i].getBehavior("Resizable").setSize(2850, 1899);
}
}{gdjs.evtsExt__AlignObject__ToSceneCentered.func(runtimeScene, gdjs.FumettoCode.mapOfGDgdjs_9546FumettoCode_9546GDSfondoObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.FumettoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FumettoCode.GD_95951Objects1.length = 0;
gdjs.FumettoCode.GD_95951Objects2.length = 0;
gdjs.FumettoCode.GD_95951Objects3.length = 0;
gdjs.FumettoCode.GD_95951Objects4.length = 0;
gdjs.FumettoCode.GD_95951Objects5.length = 0;
gdjs.FumettoCode.GD_95951Objects6.length = 0;
gdjs.FumettoCode.GD_95952Objects1.length = 0;
gdjs.FumettoCode.GD_95952Objects2.length = 0;
gdjs.FumettoCode.GD_95952Objects3.length = 0;
gdjs.FumettoCode.GD_95952Objects4.length = 0;
gdjs.FumettoCode.GD_95952Objects5.length = 0;
gdjs.FumettoCode.GD_95952Objects6.length = 0;
gdjs.FumettoCode.GDSfondoObjects1.length = 0;
gdjs.FumettoCode.GDSfondoObjects2.length = 0;
gdjs.FumettoCode.GDSfondoObjects3.length = 0;
gdjs.FumettoCode.GDSfondoObjects4.length = 0;
gdjs.FumettoCode.GDSfondoObjects5.length = 0;
gdjs.FumettoCode.GDSfondoObjects6.length = 0;
gdjs.FumettoCode.GDBackground_9595BlurObjects1.length = 0;
gdjs.FumettoCode.GDBackground_9595BlurObjects2.length = 0;
gdjs.FumettoCode.GDBackground_9595BlurObjects3.length = 0;
gdjs.FumettoCode.GDBackground_9595BlurObjects4.length = 0;
gdjs.FumettoCode.GDBackground_9595BlurObjects5.length = 0;
gdjs.FumettoCode.GDBackground_9595BlurObjects6.length = 0;
gdjs.FumettoCode.GDTransitionObjects1.length = 0;
gdjs.FumettoCode.GDTransitionObjects2.length = 0;
gdjs.FumettoCode.GDTransitionObjects3.length = 0;
gdjs.FumettoCode.GDTransitionObjects4.length = 0;
gdjs.FumettoCode.GDTransitionObjects5.length = 0;
gdjs.FumettoCode.GDTransitionObjects6.length = 0;

gdjs.FumettoCode.eventsList6(runtimeScene);
gdjs.FumettoCode.GD_95951Objects1.length = 0;
gdjs.FumettoCode.GD_95951Objects2.length = 0;
gdjs.FumettoCode.GD_95951Objects3.length = 0;
gdjs.FumettoCode.GD_95951Objects4.length = 0;
gdjs.FumettoCode.GD_95951Objects5.length = 0;
gdjs.FumettoCode.GD_95951Objects6.length = 0;
gdjs.FumettoCode.GD_95952Objects1.length = 0;
gdjs.FumettoCode.GD_95952Objects2.length = 0;
gdjs.FumettoCode.GD_95952Objects3.length = 0;
gdjs.FumettoCode.GD_95952Objects4.length = 0;
gdjs.FumettoCode.GD_95952Objects5.length = 0;
gdjs.FumettoCode.GD_95952Objects6.length = 0;
gdjs.FumettoCode.GDSfondoObjects1.length = 0;
gdjs.FumettoCode.GDSfondoObjects2.length = 0;
gdjs.FumettoCode.GDSfondoObjects3.length = 0;
gdjs.FumettoCode.GDSfondoObjects4.length = 0;
gdjs.FumettoCode.GDSfondoObjects5.length = 0;
gdjs.FumettoCode.GDSfondoObjects6.length = 0;
gdjs.FumettoCode.GDBackground_9595BlurObjects1.length = 0;
gdjs.FumettoCode.GDBackground_9595BlurObjects2.length = 0;
gdjs.FumettoCode.GDBackground_9595BlurObjects3.length = 0;
gdjs.FumettoCode.GDBackground_9595BlurObjects4.length = 0;
gdjs.FumettoCode.GDBackground_9595BlurObjects5.length = 0;
gdjs.FumettoCode.GDBackground_9595BlurObjects6.length = 0;
gdjs.FumettoCode.GDTransitionObjects1.length = 0;
gdjs.FumettoCode.GDTransitionObjects2.length = 0;
gdjs.FumettoCode.GDTransitionObjects3.length = 0;
gdjs.FumettoCode.GDTransitionObjects4.length = 0;
gdjs.FumettoCode.GDTransitionObjects5.length = 0;
gdjs.FumettoCode.GDTransitionObjects6.length = 0;


return;

}

gdjs['FumettoCode'] = gdjs.FumettoCode;
