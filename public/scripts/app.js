"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Anonymous";
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
    }

    _createClass(Person, [{
        key: "sayHello",
        value: function sayHello() {
            return "Hello this is " + this.name;
        }
    }, {
        key: "getDescription",
        value: function getDescription() {
            return this.name + " is " + this.age + " year(s) old.";
        }
    }]);

    return Person;
}();

;

var Student = function (_Person) {
    _inherits(Student, _Person);

    function Student(name, age, course) {
        _classCallCheck(this, Student);

        var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

        _this.course = course;
        return _this;
    }

    _createClass(Student, [{
        key: "getDescription",
        value: function getDescription() {
            var desc = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), "getDescription", this).call(this);

            if (this.hasMajor()) {
                desc += " their major is " + this.course;
            }

            return desc;
        }
    }, {
        key: "hasMajor",
        value: function hasMajor() {
            return !!this.course;
        }
    }]);

    return Student;
}(Person);

var Traveler = function (_Person2) {
    _inherits(Traveler, _Person2);

    function Traveler(name, age, homeLocation) {
        _classCallCheck(this, Traveler);

        var _this2 = _possibleConstructorReturn(this, (Traveler.__proto__ || Object.getPrototypeOf(Traveler)).call(this, name, age));

        _this2.homeLocation = homeLocation;
        return _this2;
    }

    _createClass(Traveler, [{
        key: "sayHello",
        value: function sayHello() {
            var locationGretting = !!this.homeLocation ? " I come from " + this.homeLocation + " I am " + this.age : '';

            return _get(Traveler.prototype.__proto__ || Object.getPrototypeOf(Traveler.prototype), "sayHello", this).call(this) + locationGretting;
        }
    }]);

    return Traveler;
}(Person);

var me = new Person("Lucas Alves", 30);

// console.log(me);
// console.log(me.getDescription());
// console.log(me.sayHello());

var student = new Student("Lucas Alves", 30, "dev");
console.log(student.getDescription());
console.log("has major", student.hasMajor());

var traveller = new Traveler("Lucas", 30, "Brazil");
console.log(traveller.sayHello());
