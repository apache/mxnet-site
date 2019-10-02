

``mx.symbol.broadcast_like``
========================================================

Description
----------------------

Broadcasts lhs to have the same shape as rhs.

Broadcasting is a mechanism that allows NDArrays to perform arithmetic operations
with arrays of different shapes efficiently without creating multiple copies of arrays.
Also see, `Broadcasting <https://docs.scipy.org/doc/numpy/user/basics.broadcasting.html>`_ for more explanation.

Broadcasting is allowed on axes with size 1, such as from `(2,1,3,1)` to
`(2,8,3,9)`. Elements will be duplicated on the broadcasted axes.

For example::
	 
	 broadcast_like([[1,2,3]], [[5,6,7],[7,8,9]]) = [[ 1.,  2.,  3.],
	 [ 1.,  2.,  3.]])
	 
	 broadcast_like([9], [1,2,3,4,5], lhs_axes=(0,), rhs_axes=(-1,)) = [9,9,9,9,9]
	 
	 
	 

Usage
----------

.. code:: r

	mx.symbol.broadcast_like(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``lhs``                                | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | First input.                                               |
+----------------------------------------+------------------------------------------------------------+
| ``rhs``                                | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Second input.                                              |
+----------------------------------------+------------------------------------------------------------+
| ``lhs.axes``                           | Shape or None, optional, default=None.                     |
|                                        |                                                            |
|                                        | Axes to perform broadcast on in the first input array      |
+----------------------------------------+------------------------------------------------------------+
| ``rhs.axes``                           | Shape or None, optional, default=None.                     |
|                                        |                                                            |
|                                        | Axes to copy from the second input array                   |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/broadcast_reduce_op_value.cc#L135

