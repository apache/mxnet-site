

``mx.symbol.MakeLoss``
============================================

Description
----------------------

Make your own loss function in network construction.

This operator accepts a customized loss function symbol as a terminal loss and
the symbol should be an operator with no backward dependency.
The output of this function is the gradient of loss with respect to the input data.

For example, if you are a making a cross entropy loss function. Assume ``out`` is the
predicted output and ``label`` is the true label, then the cross entropy can be defined as::

	 cross_entropy = label * log(out) + (1 - label) * log(1 - out)
	 loss = MakeLoss(cross_entropy)
	 
	 We will need to use ``MakeLoss`` when we are creating our own loss function or we want to
	 combine multiple loss functions. Also we may want to stop some variables' gradients
	 from backpropagation. See more detail in ``BlockGrad`` or ``stop_gradient``.
	 
	 In addition, we can give a scale to the loss by setting ``grad_scale``,
	 so that the gradient of the loss will be rescaled in the backpropagation.
	 
	 
.. note:: This operator should be used as a Symbol instead of NDArray.
	 
	 
	 

Usage
----------

.. code:: r

	mx.symbol.MakeLoss(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Input array.                                               |
+----------------------------------------+------------------------------------------------------------+
| ``grad.scale``                         | float, optional, default=1.                                |
|                                        |                                                            |
|                                        | Gradient scale as a supplement to unary and binary         |
|                                        | operators                                                  |
+----------------------------------------+------------------------------------------------------------+
| ``valid.thresh``                       | float, optional, default=0.                                |
|                                        |                                                            |
|                                        | clip each element in the array to 0 when it is less than   |
|                                        | ``valid_thresh``. This is used when ``normalization`` is   |
|                                        | set to                                                     |
|                                        | ``'valid'``.                                               |
+----------------------------------------+------------------------------------------------------------+
| ``normalization``                      | {'batch', 'null', 'valid'},optional, default='null'.       |
|                                        |                                                            |
|                                        | If this is set to null, the output gradient will not be    |
|                                        | normalized. If this is set to batch, the output gradient   |
|                                        | will be divided by the batch size. If this is set to       |
|                                        | valid, the output gradient will be divided by the number   |
|                                        | of valid input                                             |
|                                        | elements.                                                  |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/make_loss.cc#L71

