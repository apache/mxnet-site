

``mx.symbol.broadcast_not_equal``
==================================================================

Description
----------------------

Returns the result of element-wise **not equal to** (!=) comparison operation with broadcasting.


**Example**::

	 
	 x = [[ 1.,  1.,  1.],
	 [ 1.,  1.,  1.]]
	 
	 y = [[ 0.],
	 [ 1.]]
	 
	 broadcast_not_equal(x, y) = [[ 1.,  1.,  1.],
	 [ 0.,  0.,  0.]]
	 
	 
	 

Usage
----------

.. code:: r

	mx.symbol.broadcast_not_equal(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``lhs``                                | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | First input to the function                                |
+----------------------------------------+------------------------------------------------------------+
| ``rhs``                                | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Second input to the function                               |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_binary_broadcast_op_logic.cc#L64

