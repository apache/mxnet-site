

``mx.nd.one.hot``
==================================

Description
----------------------

Returns a one-hot array.

The locations represented by `indices` take value `on_value`, while all
other locations take value `off_value`.

`one_hot` operation with `indices` of shape ``(i0, i1)`` and `depth`  of ``d`` would result
in an output array of shape ``(i0, i1, d)`` with::

	 output[i,j,:] = off_value
	 output[i,j,indices[i,j]] = on_value
	 

**Example**::

	 
	 one_hot([1,0,2,0], 3) = [[ 0.  1.  0.]
	 [ 1.  0.  0.]
	 [ 0.  0.  1.]
	 [ 1.  0.  0.]]
	 
	 one_hot([1,0,2,0], 3, on_value=8, off_value=1,
	 dtype='int32') = [[1 8 1]
	 [8 1 1]
	 [1 1 8]
	 [8 1 1]]
	 
	 one_hot([[1,0],[1,0],[2,0]], 3) = [[[ 0.  1.  0.]
	 [ 1.  0.  0.]]
	 
	 [[ 0.  1.  0.]
	 [ 1.  0.  0.]]
	 
	 [[ 0.  0.  1.]
	 [ 1.  0.  0.]]]
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``indices``                            | NDArray-or-Symbol                                          |
|                                        | array of locations where to set on_value                   |
+----------------------------------------+------------------------------------------------------------+
| ``depth``                              | int, required.                                             |
|                                        |                                                            |
|                                        | Depth of the one hot dimension.                            |
+----------------------------------------+------------------------------------------------------------+
| ``on.value``                           | double, optional, default=1.                               |
|                                        |                                                            |
|                                        | The value assigned to the locations represented by         |
|                                        | indices.                                                   |
+----------------------------------------+------------------------------------------------------------+
| ``off.value``                          | double, optional, default=0.                               |
|                                        |                                                            |
|                                        | The value assigned to the locations not represented by     |
|                                        | indices.                                                   |
+----------------------------------------+------------------------------------------------------------+
| ``dtype``                              | {'float16', 'float32', 'float64', 'int32', 'int64',        |
|                                        | 'int8', 'uint8'},optional,                                 |
|                                        | default='float32'.                                         |
|                                        |                                                            |
|                                        | DType of the output                                        |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/indexing_op.cc#L824

