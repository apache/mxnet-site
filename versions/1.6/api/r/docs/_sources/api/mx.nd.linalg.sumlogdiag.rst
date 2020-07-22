

``mx.nd.linalg.sumlogdiag``
======================================================

Description
----------------------

Computes the sum of the logarithms of the diagonal elements of a square matrix.
Input is a tensor *A* of dimension *n >= 2*.

If *n=2*, *A* must be square with positive diagonal entries. We sum the natural
logarithms of the diagonal elements, the result has shape (1,).

If *n>2*, *sumlogdiag* is performed separately on the trailing two dimensions for all
inputs (batch mode).


.. note:: The operator supports float32 and float64 data types only.


**Example**::

	 
	 Single matrix reduction
	 A = [[1.0, 1.0], [1.0, 7.0]]
	 sumlogdiag(A) = [1.9459]
	 
	 Batch matrix reduction
	 A = [[[1.0, 1.0], [1.0, 7.0]], [[3.0, 0], [0, 17.0]]]
	 sumlogdiag(A) = [1.9459, 3.9318]
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``A``                                  | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Tensor of square matrices                                  |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/la_op.cc#L445

