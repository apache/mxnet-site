

``mx.nd.batch.take``
========================================

Description
----------------------

Takes elements from a data batch.


.. note::   `batch_take` is deprecated. Use `pick` instead.

Given an input array of shape ``(d0, d1)`` and indices of shape ``(i0,)``, the result will be
an output array of shape ``(i0,)`` with::

	 output[i] = input[i, indices[i]]
	 

**Example**::

	 
	 x = [[ 1.,  2.],
	 [ 3.,  4.],
	 [ 5.,  6.]]
	 
	 // takes elements with specified indices
	 batch_take(x, [0,1,0]) = [ 1.  4.  5.]
	 
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``a``                                  | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The input array                                            |
+----------------------------------------+------------------------------------------------------------+
| ``indices``                            | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The index array                                            |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/indexing_op.cc#L777

