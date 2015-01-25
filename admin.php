
<div  class="scrollable">  

  <div class="scrollable-content">
    <div id="content">
    <a href="#">back</a>
<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
       <div ng-controller="Updater">
        <form > 
            <textarea rows="3" id ="update" class="form-control" placeholder="Enter any updates ..." ng-model="updateData"></textarea>
            <br>
            <button type="submit" ng-click="addUpdate()" class="btn btn-primary">Update</button>
        </form>
        </div>
      </div>
    <div class="col-md-2"></div>
</div>
<div class="col-md-2"></div>

<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-7">
        <form>
              <div ng-repeat="row in event_categories" >
                  <h2>{{row}}</h2>
                  <div ng-repeat="x in event[row]" >
                  <input type="checkbox" > {{x}}
                  <br>
                  </div>
              </div>
              <br> <button type="submit" class="btn btn-primary">Update</button></div>

        </form>
    </div>
    <div class="col-md-2"></div>
  </div>
</div></div></div>
