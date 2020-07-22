

``mx.nd.L2Normalization``
==================================================

Description
----------------------

Normalize the input array using the L2 norm.

For 1-D NDArray, it computes::

	 out = data / sqrt(sum(data ** 2) + eps)
	 
	 For N-D NDArray, if the input array has shape (N, N, ..., N),
	 
	 with ``mode`` = ``instance``, it normalizes each instance in the multidimensional
array by its L2 norm.::

	 for i in 0...N
	 out[i,:,:,...,:] = data[i,:,:,...,:] / sqrt(sum(data[i,:,:,...,:] ** 2) + eps)
	 
with ``mode`` = ``channel``, it normalizes each channel in the array by its L2 norm.::

	 for i in 0...N
	 out[:,i,:,...,:] = data[:,i,:,...,:] / sqrt(sum(data[:,i,:,...,:] ** 2) + eps)
	 
	 with ``mode`` = ``spatial``, it normalizes the cross channel norm for each position
in the array by its L2 norm.::

	 for dim in 2...N
	 for i in 0...N
	 out[.....,i,...] = take(out, indices=i, axis=dim) / sqrt(sum(take(out, indices=i, axis=dim) ** 2) + eps)
	 -dim-
	 

**Example**::

	 
	 x = [[[1,2],
	 [3,4]],
	 [[2,2],
	 [5,6]]]
	 
	 L2Normalization(x, mode='instance')
	 =[[[ 0.18257418  0.36514837]
	 [ 0.54772252  0.73029673]]
	 [[ 0.24077171  0.24077171]
	 [ 0.60192931  0.72231513]]]
	 
	 L2Normalization(x, mode='channel')
	 =[[[ 0.31622776  0.44721359]
	 [ 0.94868326  0.89442718]]
	 [[ 0.37139067  0.31622776]
	 [ 0.92847669  0.94868326]]]
	 
	 L2Normalization(x, mode='spatial')
	 =[[[ 0.44721359  0.89442718]
	 [ 0.60000002  0.80000001]]
	 [[ 0.70710677  0.70710677]
	 [ 0.6401844   0.76822126]]]
	 
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Input array to normalize.                                  |
+----------------------------------------+------------------------------------------------------------+
| ``eps``                                | float, optional, default=1.00000001e-10.                   |
|                                        |                                                            |
|                                        | A small constant for numerical stability.                  |
+----------------------------------------+------------------------------------------------------------+
| ``mode``                               | {'channel', 'instance', 'spatial'},optional,               |
|                                        | default='instance'.                                        |
|                                        |                                                            |
|                                        | Specify the dimension along which to compute L2 norm.      |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/l2_normalization.cc#L196

