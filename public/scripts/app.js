'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            options: props.options
        };
        _this.addOption = _this.addOption.bind(_this);
        _this.removeAllOptions = _this.removeAllOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.deleteOption = _this.deleteOption.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var strOptions = localStorage.getItem('options');
                var options = JSON.parse(strOptions) || [];
                this.setState(function () {
                    return { options: options };
                });
            } catch (e) {
                console.error("failed to parse");
            }
            startCursor();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length != this.state.options.length) {
                localStorage.setItem('options', JSON.stringify(this.state.options));
            }

            startCursor();
        }
    }, {
        key: 'addOption',
        value: function addOption(option) {
            if (!option) {
                return "Enter a valid option";
            } else if (this.state.options.indexOf(option) > -1) {
                return "This option already exists";
            }
            this.setState(function (prev) {
                return { options: prev.options.concat(option) };
            });
        }
    }, {
        key: 'deleteOption',
        value: function deleteOption(option) {
            var _this2 = this;

            this.setState(function () {
                return {
                    options: _this2.state.options.filter(function (o) {
                        return o !== option;
                    })
                };
            });
        }
    }, {
        key: 'removeAllOptions',
        value: function removeAllOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomIndex = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[randomIndex]);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, null),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    removeAll: this.removeAllOptions,
                    deleteOption: this.deleteOption
                }),
                React.createElement(AddOption, { addOption: this.addOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this3 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this3.submit = _this3.submit.bind(_this3);
        _this3.state = {
            error: undefined
        };
        return _this3;
    }

    _createClass(AddOption, [{
        key: 'submit',
        value: function submit(e) {
            e.preventDefault();
            var option = e.target.elements.addOption.value.trim();
            e.target.elements.addOption.value = "";
            var error = this.props.addOption(option);
            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    { style: { color: "red" } },
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.submit },
                    React.createElement('input', { type: 'text', name: 'addOption' }),
                    React.createElement(
                        'button',
                        { type: 'submit' },
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of computer"
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handlePick,
                disabled: !props.hasOptions
            },
            'What should I do?'
        )
    );
};

var Options = function Options(props) {
    var optionsCount = props.options.length;
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.removeAll },
            'Remove all'
        ),
        React.createElement(
            'p',
            null,
            'you have ',
            optionsCount,
            ' options'
        ),
        optionsCount == 0 && React.createElement(
            'p',
            null,
            'Please add an option to get started!'
        ),
        props.options.map(function (item, index) {
            return React.createElement(Option, {
                key: index,
                item: item,
                deleteOption: props.deleteOption
            });
        })
    );
};

var Option = function Option(props) {
    var handleRemove = function handleRemove() {
        props.deleteOption(props.item);
    };

    return React.createElement(
        'div',
        null,
        props.item,
        React.createElement(
            'button',
            { onClick: handleRemove },
            'remove option'
        )
    );
};

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
