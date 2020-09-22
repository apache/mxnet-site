

``mx.symbol.broadcast_hypot``
==========================================================

Description
----------------------

Returns the hypotenuse of a right angled triangle, given its "legs"
with broadcasting.

It is equivalent to doing :math:`sqrt(x_1^2 + x_2^2)`.


**Example**::

	 
	 x = [[ 3.,  3.,  3.]]
	 
	 y = [[ 4.],
	 [ 4.]]
	 
	 broadcast_hypot(x, y) = [[ 5.,  5.,  5.],
	 [ 5.,  5.,  5.]]
	 
	 z = [[ 0.],
	 [ 4.]]
	 
	 broadcast_hypot(x, z) = [[ 3.,  3.,  3.],
	 [ 5.,  5.,  5.]]
	 
	 
	 

Usage
----------

.. code:: r

	mx.symbol.broadcast_hypot(...)

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


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_binary_broadcast_op_extended.cc#L158

