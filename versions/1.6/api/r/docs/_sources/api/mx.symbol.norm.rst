

``mx.symbol.norm``
====================================

Description
----------------------

Computes the norm on an NDArray.

This operator computes the norm on an NDArray with the specified axis, depending
on the value of the ord parameter. By default, it computes the L2 norm on the entire
array. Currently only ord=2 supports sparse ndarrays.


**Example**::

	 
	 x = [[[1, 2],
	 [3, 4]],
	 [[2, 2],
	 [5, 6]]]
	 
	 norm(x, ord=2, axis=1) = [[3.1622777 4.472136 ]
	 [5.3851647 6.3245554]]
	 
	 norm(x, ord=1, axis=1) = [[4., 6.],
	 [7., 8.]]
	 
	 rsp = x.cast_storage('row_sparse')
	 
	 norm(rsp) = [5.47722578]
	 
	 csr = x.cast_storage('csr')
	 
	 norm(csr) = [5.47722578]
	 
	 
	 

Usage
----------

.. code:: r

	mx.symbol.norm(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The input                                                  |
+----------------------------------------+------------------------------------------------------------+
| ``ord``                                | int, optional, default='2'.                                |
|                                        |                                                            |
|                                        | Order of the norm. Currently ord=1 and ord=2 is supported. |
+----------------------------------------+------------------------------------------------------------+
| ``axis``                               | Shape or None, optional, default=None.                     |
|                                        |                                                            |
|                                        | The axis or axes along which to perform the reduction.     |
|                                        | The default, `axis=()`, will compute over all elements     |
|                                        | into                                                       |
|                                        | a                                                          |
|                                        | scalar array with shape `(1,)`.                            |
|                                        | If `axis` is int, a reduction is performed on a particular |
|                                        | axis.                                                      |
|                                        | If `axis` is a 2-tuple, it specifies the axes that hold    |
|                                        | 2-D                                                        |
|                                        | matrices,                                                  |
|                                        | and the matrix norms of these matrices are computed.       |
+----------------------------------------+------------------------------------------------------------+
| ``out.dtype``                          | {None, 'float16', 'float32', 'float64', 'int32', 'int64',  |
|                                        | 'int8'},optional,                                          |
|                                        | default='None'.                                            |
|                                        |                                                            |
|                                        | The data type of the output.                               |
+----------------------------------------+------------------------------------------------------------+
| ``keepdims``                           | boolean, optional, default=0.                              |
|                                        |                                                            |
|                                        | If this is set to `True`, the reduced axis is left in the  |
|                                        | result as dimension with size                              |
|                                        | one.                                                       |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/broadcast_reduce_norm_value.cc#L89

