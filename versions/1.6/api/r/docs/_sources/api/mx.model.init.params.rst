

``mx.model.init.params``
================================================

Description
----------------------

Parameter initialization

Usage
----------

.. code:: r

	mx.model.init.params(symbol, input.shape, output.shape, initializer, ctx)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``symbol``                             | The symbolic configuration of the neural network.          |
+----------------------------------------+------------------------------------------------------------+
| ``input.shape``                        | The shape of the input for the neural network.             |
+----------------------------------------+------------------------------------------------------------+
| ``output.shape``                       | The shape of the output for the neural network. It can be  |
|                                        | NULL.                                                      |
+----------------------------------------+------------------------------------------------------------+
| ``initializer``                        | initializer object. The initialization scheme for          |
|                                        | parameters.                                                |
+----------------------------------------+------------------------------------------------------------+
| ``ctx``                                | mx.context. The devices used to perform initialization.    |
+----------------------------------------+------------------------------------------------------------+



