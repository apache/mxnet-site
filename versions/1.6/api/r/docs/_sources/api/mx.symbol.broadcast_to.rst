

``mx.symbol.broadcast_to``
====================================================

Description
----------------------

Broadcasts the input array to a new shape.

Broadcasting is a mechanism that allows NDArrays to perform arithmetic operations
with arrays of different shapes efficiently without creating multiple copies of arrays.
Also see, `Broadcasting <https://docs.scipy.org/doc/numpy/user/basics.broadcasting.html>`_ for more explanation.

Broadcasting is allowed on axes with size 1, such as from `(2,1,3,1)` to
`(2,8,3,9)`. Elements will be duplicated on the broadcasted axes.

For example::
	 
	 broadcast_to([[1,2,3]], shape=(2,3)) = [[ 1.,  2.,  3.],
	 [ 1.,  2.,  3.]])
	 
	 The dimension which you do not want to change can also be kept as `0` which means copy the original value.
	 So with `shape=(2,0)`, we will obtain the same result as in the above example.
	 
	 
	 

Usage
----------

.. code:: r

	mx.symbol.broadcast_to(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The input                                                  |
+----------------------------------------+------------------------------------------------------------+
| ``shape``                              | Shape(tuple), optional, default=[].                        |
|                                        |                                                            |
|                                        | The shape of the desired array. We can set the dim to zero |
|                                        | if it's same as the original. E.g `A = broadcast_to(B,     |
|                                        | shape=(10, 0, 0))` has the same meaning as `A =            |
|                                        | broadcast_axis(B, axis=0,                                  |
|                                        | size=10)`.                                                 |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/broadcast_reduce_op_value.cc#L82

