

``mx.nd.BlockGrad``
======================================

Description
----------------------

Stops gradient computation.

Stops the accumulated gradient of the inputs from flowing through this operator
in the backward direction. In other words, this operator prevents the contribution
of its inputs to be taken into account for computing gradients.


**Example**::

	 
	 v1 = [1, 2]
	 v2 = [0, 1]
	 a = Variable('a')
	 b = Variable('b')
	 b_stop_grad = stop_gradient(3 * b)
	 loss = MakeLoss(b_stop_grad + a)
	 
	 executor = loss.simple_bind(ctx=cpu(), a=(1,2), b=(1,2))
	 executor.forward(is_train=True, a=v1, b=v2)
	 executor.outputs
	 [ 1.  5.]
	 
	 executor.backward()
	 executor.grad_arrays
	 [ 0.  0.]
	 [ 1.  1.]
	 
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The input array.                                           |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_basic.cc#L327

