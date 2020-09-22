

``mx.nd.Concat``
================================

Description
----------------------

Joins input arrays along a given axis.


.. note:: `Concat` is deprecated. Use `concat` instead.

The dimensions of the input arrays should be the same except the axis along
which they will be concatenated.
The dimension of the output array along the concatenated axis will be equal
to the sum of the corresponding dimensions of the input arrays.

The storage type of ``concat`` output depends on storage types of inputs

- concat(csr, csr, ..., csr, dim=0) = csr
- otherwise, ``concat`` generates output with default storage


**Example**::

	 
	 x = [[1,1],[2,2]]
	 y = [[3,3],[4,4],[5,5]]
	 z = [[6,6], [7,7],[8,8]]
	 
	 concat(x,y,z,dim=0) = [[ 1.,  1.],
	 [ 2.,  2.],
	 [ 3.,  3.],
	 [ 4.,  4.],
	 [ 5.,  5.],
	 [ 6.,  6.],
	 [ 7.,  7.],
	 [ 8.,  8.]]
	 
	 Note that you cannot concat x,y,z along dimension 1 since dimension
	 0 is not the same for all the input arrays.
	 
	 concat(y,z,dim=1) = [[ 3.,  3.,  6.,  6.],
	 [ 4.,  4.,  7.,  7.],
	 [ 5.,  5.,  8.,  8.]]
	 
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol[].                                       |
|                                        |                                                            |
|                                        | List of arrays to concatenate                              |
+----------------------------------------+------------------------------------------------------------+
| ``num.args``                           | int, required.                                             |
|                                        |                                                            |
|                                        | Number of inputs to be concated.                           |
+----------------------------------------+------------------------------------------------------------+
| ``dim``                                | int, optional, default='1'.                                |
|                                        |                                                            |
|                                        | the dimension to be concated.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/nn/concat.cc#L383

